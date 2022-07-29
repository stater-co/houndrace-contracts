// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function unenqueue(uint256 theId, uint256 hound) external {
        Queue.Struct memory _queue = queues[theId];

        uint256[] memory replacedParticipants = _queue.participants;
        uint256[] memory replacedEnqueueDates = _queue.enqueueDates;
        delete queues[theId].participants;
        delete queues[theId].enqueueDates;

        bool exists;
        for ( uint256 i = 0 ; i < replacedParticipants.length ; ++i ) {
            if ( replacedParticipants[i] == hound ) {
                exists = true;
                require(replacedEnqueueDates[i] < block.timestamp - _queue.cooldown);
            } else {
                queues[theId].participants.push(replacedParticipants[i]);
                queues[theId].enqueueDates.push(replacedEnqueueDates[i]);
            }
        }
        require(exists);

        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, 0) == theId);
        address houndOwner = IHoundOwner(control.hounds).houndOwner(hound);

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = _queue.entryFee;
        uint256 value = _queue.currency == address(0) ? _queue.entryFee : 0;
        
        IPay(control.payments).pay{
            value: value
        }(
            address(this),
            houndOwner,
            _queue.currency,
            new uint256[](0),
            amounts,
            _queue.currency == address(0) ? 3 : 2
        );

        emit Unenqueue(theId, hound);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {

        require(
            queues[theId].totalParticipants > 0 && !queues[theId].closed && 
            ((queues[theId].endDate == 0 && queues[theId].startDate ==0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp)) && 
            msg.value >= queues[theId].entryFee && 
            IHoundOwner(control.hounds).houndOwner(hound) == msg.sender && 
            queues[theId].lastCompletion < block.timestamp - queues[theId].cooldown
        );

        for ( uint256 i = 0 ; i < queues[theId].participants.length ; ++i ) {
            require(queues[theId].participants[i] != hound);
        }

        queues[theId].participants.push(hound);
        queues[theId].enqueueDates.push(block.timestamp);

        IUpdateHoundStamina(control.hounds).updateHoundStamina(hound);
        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, theId) == 0);

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            Arena.Struct memory arena = IArena(control.arenas).arena(queues[theId].arena);

            IHandleArenaUsage(control.arenas).handleArenaUsage{ 
                value: arena.feeCurrency == address(0) ? arena.fee : 0
            }(queues[theId].arena);

            IHandleRaceLoot(control.races).handleRaceLoot(
                queues[theId].payments
            );

            IRaceStart(control.races).raceStart(queues[theId], theId);

            delete queues[theId].participants;

            queues[theId].lastCompletion = block.timestamp;

        }
    
        emit PlayerEnqueue(theId,hound,msg.sender);

    }

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function unenqueue(uint256 theId, uint256 hound) external {
        Queue.Struct memory _queue = queues[theId];
        Arena.Struct memory arena = IArena(control.arenas).arena(_queue.arena);

        uint256[] memory replacedParticipants = _queue.participants;
        uint256[] memory replacedEnqueueDates = _queue.enqueueDates;
        delete queues[theId].participants;
        delete queues[theId].enqueueDates;

        if ( replacedParticipants.length > 0 ) {
            bool exists;
            for ( uint256 i = 0 ; i < replacedParticipants.length ; ++i ) {
                console.log("Participant: ", replacedParticipants[i], " against ", hound);
                if ( replacedParticipants[i] == hound ) {
                    console.log("yeaaas");
                    exists = true;
                    console.log("yeaaas 2 ", replacedEnqueueDates[i]);
                    console.log(block.timestamp);
                    console.log(_queue.cooldown);
                    require(replacedEnqueueDates[i] < block.timestamp - _queue.cooldown);
                    console.log("ok...");
                } else {
                    queues[theId].participants.push(replacedParticipants[i]);
                    queues[theId].enqueueDates.push(replacedEnqueueDates[i]);
                }
            }
            require(exists);
            console.log("perfect");
        }

        console.log("now...");
        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, 0) == theId);
        console.log("ok agains");
        address houndOwner = IHoundOwner(control.hounds).houndOwner(hound);

        console.log("ok agains x2");
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = _queue.entryFee;
        uint256 value = arena.currency == address(0) ? _queue.entryFee : 0;
        
        console.log("ok agains x3");
        IPay(control.payments).pay{
            value: value
        }(
            control.payments,
            houndOwner,
            arena.currency,
            new uint256[](0),
            amounts,
            arena.currency == address(0) ? 3 : 2
        );

        console.log("ok agains x4");
        emit Unenqueue(theId, hound);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {

        console.log("OK 1");

        require(
            queues[theId].totalParticipants > 0 && !queues[theId].closed && 
            ((queues[theId].endDate == 0 && queues[theId].startDate ==0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp)) && 
            msg.value >= queues[theId].entryFee && 
            IHoundOwner(control.hounds).houndOwner(hound) == msg.sender && 
            queues[theId].lastCompletion < block.timestamp - queues[theId].cooldown
        );

        console.log("OK 2");

        for ( uint256 i = 0 ; i < queues[theId].participants.length ; ++i ) {
            require(queues[theId].participants[i] != hound);
        }

        console.log("OK 3 ", hound);

        queues[theId].participants.push(hound);
        queues[theId].enqueueDates.push(block.timestamp);

        console.log("OK 3.5 ");

        IUpdateHoundStamina(control.hounds).updateHoundStamina(hound);

        console.log("OK 3.6 ");
        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, theId) == 0);

        console.log("OK 4");

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            Arena.Struct memory arena = IArena(control.arenas).arena(queues[theId].arena);

            console.log("Enqueue using: ", arena.currency);

            IHandleArenaUsage(control.arenas).handleArenaUsage{ 
                value: arena.currency == address(0) ? arena.fee : 0
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
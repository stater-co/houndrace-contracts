// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function unenqueue(uint256 theId, uint256 hound) external {
        Hound.Struct memory houndObj = IHound(control.hounds).hound(hound);
        require(houndObj.queueId == theId);
        Queue.Struct memory _queue = queues[theId];

        uint256[] memory replacedParticipants = _queue.participants;
        delete queues[theId].participants;

        bool exists;
        for ( uint256 i = 0 ; i < replacedParticipants.length ; ++i ) {
            if ( replacedParticipants[i] == hound ) {
                exists = true;
            } else {
                queues[theId].participants.push(replacedParticipants[i]);
            }
        }
        require(exists);

        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, 0) != 0);
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
            IHoundOwner(control.hounds).houndOwner(hound) == msg.sender
        );

        Hound.Struct memory houndObj = IHound(control.hounds).hound(hound);

        for ( uint256 i = 0 ; i < queues[theId].participants.length ; ++i ) {
            require(queues[theId].participants[i] != hound);
        }

        queues[theId].participants.push(hound);

        IUpdateHoundStamina(control.hounds).updateHoundStamina(hound);
        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, theId) == 0);

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            IRaceStart(control.races).raceStart(queues[theId], theId);

            delete queues[theId].participants;

        }
    
        emit PlayerEnqueue(theId,hound,msg.sender);
    }

}
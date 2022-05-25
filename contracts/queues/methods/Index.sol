// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function enqueue(uint256 theId, uint256 hound) external payable {
        require(queues[theId].totalParticipants > 0 && !queues[theId].closed);

        require((queues[theId].endDate == 0 && queues[theId].startDate ==0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp));

        require(msg.value >= queues[theId].entryFee);

        require(IHounds(control.hounds).houndOwner(hound) == msg.sender);

        Hound.Struct memory houndObj = IHounds(control.hounds).hound(hound);

        require(!houndObj.running);

        for ( uint256 i = 0 ; i < queues[theId].participants.length ; ++i ) {
            require(queues[theId].participants[i] != hound);
        }

        queues[theId].participants.push(hound);

        IHounds(control.hounds).updateHoundStamina(hound);
        IHounds(control.hounds).updateHoundRunning(theId, true);

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            IRacesMethods(control.races).raceStart{ value: queues[theId].entryFee * queues[theId].totalParticipants }(queues[theId]);

            delete queues[theId].participants;

        }
    
        emit PlayerEnqueue(theId,hound,msg.sender);
    }

}
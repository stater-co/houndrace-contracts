// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function enqueue(uint256 theId, uint256 hound) external payable {
        require(queues[theId].totalParticipants > 0);

        require((queues[theId].endDate == 0 && queues[theId].startDate ==0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp));

        require(msg.value >= queues[theId].entryFee);

        Hound.Struct memory houndObj = IHounds(control.hounds).hound(hound);

        require(!houndObj.running);

        queues[theId].participants.push(hound);
        
        console.log("Update hound stamina");

        IHounds(control.hounds).updateHoundStamina(hound);

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            console.log("Race start here, from queue: ", theId);

            IRacesMethods(control.races).raceStart{ value: queues[theId].entryFee * queues[theId].totalParticipants }(queues[theId]);

        }

        emit PlayerEnqueue(theId,hound,msg.sender);
    }

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function enqueue(uint256 theId, uint256 hound) external payable {

        console.log("ok here too..");

        require(queues[theId].totalParticipants > 0);

        console.log("ok here too.. x2");

        require((queues[theId].endDate == 0 && queues[theId].startDate ==0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp));

        console.log("ok here too.. x3");

        require(msg.value >= queues[theId].entryFee);

        console.log("ok here too.. x4");

        Hound.Struct memory houndObj = IHoundsZerocost(control.hounds).hound(hound);

        require(!houndObj.running);

        console.log("ok here too.. x5");

        queues[theId].participants.push(hound);

        console.log("ok here too.. x6");
        
        IHoundsModifier(control.hounds).updateHoundStamina(hound);

        console.log("ok here too.. x7");

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {
            
            // call

        }

        emit PlayerEnqueue(theId,hound,msg.sender);

        console.log("ok here too.. x8");

    }

}

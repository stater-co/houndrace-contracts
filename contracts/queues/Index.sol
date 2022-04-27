// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Queues is Params {
    
    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory theQueues) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function deleteQueue(uint256 theId) external onlyOwner {
        console.log("delete queue so far so good.. ", control.restricted);
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        console.log("so far so good.. ", control.methods);
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
        console.log("so far so good.. success ", control.methods);
    }

    function queue(uint256 theId) external view returns(Queue.Struct memory) {
        return queues[theId];
    }

}

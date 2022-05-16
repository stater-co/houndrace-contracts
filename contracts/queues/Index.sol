// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Queues is Params {
    
    constructor(QueuesConstructor.Struct memory input, address[] memory allowedCallers) Params(input, allowedCallers) {}

    function createQueues(Queue.Struct[] memory theQueues) external onlyOwner {
        (bool success,) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function deleteQueue(uint256 theId) external onlyOwner {
        (bool success,) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        (bool success,) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function onBeforeRace(uint256 theId) public payable {
        (bool success,) = control.methods.delegatecall(msg.data);
        require(success); 
    }

}

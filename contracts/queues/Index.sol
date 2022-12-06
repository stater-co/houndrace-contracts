// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './params/Index.sol';


contract Queues is Params {
    
    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory createdQueues) external {
        (bool success,) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function editQueue(uint256 queueId, Queue.Struct memory queue) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function closeQueue(uint256 queueId) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function enqueue(uint256 queueId, uint256 hound) external payable {
        (bool success,) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function unenqueue(uint256 queueId, uint256 hound) external {
        (bool success,) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function getEnqueueCost(uint256 queueId) external view returns(
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory
    ) {
        return IGetEnqueueCost(control.zerocost).getEnqueueCost(queueId);
    }

}

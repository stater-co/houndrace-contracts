// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './params/Index.sol';


contract Queues is Params {
    
    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory theQueues) external {
        (bool success,) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function editQueue(uint256 theId, Queue.Struct memory queue) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function closeQueue(uint256 theId) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        (bool success,) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function unenqueue(uint256 theId, uint256 hound) external {
        (bool success,) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function enqueueCost(uint256 theId) external view returns(
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory
    ) {
        return IEnqueueCost(control.zerocost).enqueueCost(theId);
    }

}

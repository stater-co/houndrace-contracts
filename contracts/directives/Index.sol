// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Queues is Params {
    
    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory theQueues) external onlyOwner {
        (bool success, bytes memory output) = control.restricted.delegatecall(msg.data);
        require(success, abi.decode(output,(string)));
    }

    function deleteQueue(uint256 theId) external onlyOwner {
        (bool success, bytes memory output) = control.restricted.delegatecall(msg.data);
        require(success, abi.decode(output,(string)));
    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success, abi.decode(output,(string)));
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import './params/Constructor.sol';
import './params/Queue.sol';


interface IQueuesMethods { 

    function enqueue(uint256 theId, uint256 hound) external payable;

    function queue(uint256 theId) external view returns(Queue.Struct memory);

    function setGlobalParameters(QueuesConstructor.Struct memory input) external;

    function createQueues(Queue.Struct[] memory theQueues) external;

    function editQueue(uint256 theId, Queue.Struct memory queue) external;

    function closeQueue(uint256 theId) external;

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Constructor.sol';
import './params/Queue.sol';


interface IQueues { 

    function enqueue(uint256 theId, uint256 hound) external payable;

    function queue(uint256 theId) external view returns(Queue.Struct memory);

    function setGlobalParameters(QueuesConstructor.Struct memory input) external;

    function createQueues(Queue.Struct[] memory theQueues) external;

    function deleteQueue(uint256 theId) external;

    function onBeforeRace(uint256 theId) external payable;

}

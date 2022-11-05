// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Queue.sol';


interface ICreateQueues { 

    function createQueues(Queue.Struct[] memory createdQueues) external;

}

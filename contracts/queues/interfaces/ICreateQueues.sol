// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Queue.sol';


interface ICreateQueues { 

    function createQueues(Queue.Struct[] memory theQueues) external;

}

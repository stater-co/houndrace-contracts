// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Queue.sol';


interface ICreateQueues { 

    function createQueues(Queue.Struct[] memory theQueues) external;

}

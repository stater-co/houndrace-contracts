// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../../payments/payment/Index.sol';
import '../params/Constructor.sol';
import '../params/Queue.sol';


interface IQueuesRestricted {

    function setGlobalParameters(QueuesConstructor.Struct memory input) external;

    function createQueues(Queue.Struct[] memory theQueues) external;

    function deleteQueue(uint256 theId) external;

}

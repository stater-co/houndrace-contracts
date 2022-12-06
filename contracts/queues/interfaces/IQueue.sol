// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Queue.sol';


interface IQueue { 

    function queue(uint256 queueId) external view returns(Queue.Struct memory);

}

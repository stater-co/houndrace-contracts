// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Queue.sol';


interface IQueue { 

    function queue(uint256 theId) external view returns(Queue.Struct memory);

}

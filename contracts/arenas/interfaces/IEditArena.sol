//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Arena.sol';


interface IEditArena {
    
    function editArena(uint256 theId, Arena.Struct memory arena) external;
    
}
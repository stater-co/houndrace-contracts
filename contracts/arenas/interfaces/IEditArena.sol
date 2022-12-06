//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Arena.sol';


interface IEditArena {
    
    function editArena(uint256 arenaId, Arena.Struct memory arena) external;
    
}
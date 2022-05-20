//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Arena.sol';


interface ICreateArena {

    function createArena(Arena.Struct memory arena) external;
    
}
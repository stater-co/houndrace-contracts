//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Arena.sol';


interface IArena {
    
    function arena(uint256 arenaId) external view returns(Arena.Struct memory);
    
}
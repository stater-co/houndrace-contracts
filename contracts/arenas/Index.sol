//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';


contract Arenas is Params {

    constructor(ArenasConstructor.Struct memory arenasConstructor) Params(arenasConstructor) {}

    function createArena(Arena.Struct memory arena) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }
    
    function editArena(uint256 theId, Arena.Struct memory arena) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }
    
    function arena(uint256 theId) external view returns(Arena.Struct memory) {
        return arenas[theId];
    }
    
}
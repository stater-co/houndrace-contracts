//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract ArenasZerocost is Params {

    constructor(ArenasConstructor.Struct memory input) Params(input) {}
    
    function arena(uint256 theId) external view returns(Arena.Struct memory) {
        return arenas[theId];
    }
    
}
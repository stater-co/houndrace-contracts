//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract ArenasZerocost is Params {
    
    function arena(uint256 theId) external view returns(Arena.Struct memory) {
        return arenas[theId];
    }
    
}
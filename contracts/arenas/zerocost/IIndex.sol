//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Arena.sol';


interface IArenasZerocost {
    
    function arena(uint256 theId) external view returns(Arena.Struct memory);
    
}
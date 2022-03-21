//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../arena/Index.sol';


interface IArenasZerocost {
    
    function arena(uint256 theId) external view returns(Arena.Struct memory);
    
}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Arena.sol';


interface IArenaCurrency {
    
    function arenaCurrency(uint256 theId) external view returns(address);
    
}
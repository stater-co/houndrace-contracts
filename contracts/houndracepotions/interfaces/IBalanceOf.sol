// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IBalanceOf {

    function balanceOf(address account) external view returns (uint256);
    
}

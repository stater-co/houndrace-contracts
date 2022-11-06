// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IAllowance {

    function allowance(address owner, address spender) external view returns (uint256);

}

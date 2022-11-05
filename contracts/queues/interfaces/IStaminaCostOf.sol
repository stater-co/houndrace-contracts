// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IStaminaCostOf { 

    function staminaCostOf(uint256 queueId) external view returns(uint32);

}

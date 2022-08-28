// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

interface IEnqueueCost {

    function enqueueCost(uint256 theId) external view returns(uint256);

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IEnqueue { 

    function enqueue(uint256 queueId, uint256 hound) external payable;

}

//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;


interface IUpdateHoundRunning {

    function updateHoundRunning(uint256 theId, uint256 queueId) external returns(uint256 oldQueueId);

}
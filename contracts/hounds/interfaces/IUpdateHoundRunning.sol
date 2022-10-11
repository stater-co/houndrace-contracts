//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IUpdateHoundRunning {

    function updateHoundRunning(uint256 theId, uint256 runningOn) external returns(uint256 ranOn);

}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;


interface IUpdateHoundRunning {

    function updateHoundRunning(uint256 theId, bool running) external returns(bool);

}
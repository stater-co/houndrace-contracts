// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;


interface IRandomnessMethods {

    function getRandomNumber(bytes memory input) external view returns(uint256);

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;


interface IGetRandomNumber {

    function getRandomNumber(bytes memory input) external view returns(uint256);

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IRandomnessZerocost {

    function getRandomNumber(bytes memory input) external view returns(uint256);

}
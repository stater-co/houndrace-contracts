// SPDX-License-Identifier: MIT
pragma solidity <=0.8.10;


interface IRandomnessVanillaData {
    function getRandomNumber(bytes memory input) external view returns(uint256);
    function setGlobalParameters(address methods) external;
}


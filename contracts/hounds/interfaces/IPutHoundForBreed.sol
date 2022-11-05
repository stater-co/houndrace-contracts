//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IPutHoundForBreed {

    function putHoundForBreed(
        uint256 houndId, 
        uint256 fee,
        bool status
    ) external;

}
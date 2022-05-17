//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IGetBreedCost {

    function getBreedCost(uint256 hound1, uint256 hound2) external view returns(uint256);

}
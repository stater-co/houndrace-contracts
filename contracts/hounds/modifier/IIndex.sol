//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;


interface IHoundsModifier {
    
    function updateHoundStamina(uint256 theId) external payable;

    function updateHoundBreeding(uint256 theId, uint256 breedingCooldownToConsume) external payable;

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external;

}
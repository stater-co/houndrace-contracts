//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;


interface IHoundsModifier {
    
    function boostStamina(uint256 theId) external payable;

    function updateStamina(uint256 theId) external;

    function boostBreedingCooldown(uint256 theId) external payable;

    function updateHoundBreeding(uint256 theId) external;

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external;
    
}
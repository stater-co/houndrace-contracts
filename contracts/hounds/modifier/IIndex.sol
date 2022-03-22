//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IHoundsModifier {
    
    function updateHoundStamina(uint256 theId) external;

    function boostHoundStamina(uint256 theId, address user) external payable;

    function updateHoundBreeding(uint256 theId) external;

    function boostHoundBreeding(uint256 theId, address user) external payable;

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external;

}
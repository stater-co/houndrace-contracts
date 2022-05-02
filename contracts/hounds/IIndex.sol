//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './hound/Index.sol';


interface IHounds {

    function initializeHound(uint256 onId, Hound.Struct memory theHound) external;

    function setTokenURI(uint256 _tokenId, string memory token_uri) external;

    function breedHounds(uint256 hound1, uint256 hound2) external payable;

    function updateHoundStamina(uint256 theId) external;

    function updateHoundBreeding(uint256 theId) external;

    function boostHoundStamina(uint256 theId, address user) external payable;

    function boostHoundBreeding(uint256 theId, address user) external payable;

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external;

    function hound(uint256 theId) external view returns(Hound.Struct memory);

    function tokenURI(uint256 _tokenId) external view returns (string memory);

    function houndOwner(uint256 tokenId) external view returns(address);

    function getBreedCost(uint256 hound1, uint256 hound2) external view returns(uint256);

}
//SPDX-License-Identifier: MIT
pragma solidity <=0.8.10;

import './GlobalVariables.sol';
import './Hound.sol';


interface IHoundsData {
    function setGlobalParameters(GlobalVariables.Struct memory input) external;
    function adminCreateHound(Hound.Struct memory theHounds) external;
    function breedHounds(uint256 hound1, uint256 hound2) external payable;
    function updateHoundStamina(uint256 theId) external;
    function updateHoundBreeding(uint256 theId, uint256 breedingCooldownToConsume) external;
    function putHoundForBreed(uint256 _hound, uint256 fee, bool status) external;
    function hound(uint256 theId) external view returns(Hound.Struct memory);
    function ownerOf(uint256 tokenId) external view returns(address);
    function handleHoundTransfer(uint256 theId, address from, address to) external;
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function tokenURI(uint256 _tokenId) external view returns(string memory);
    function setTokenURI(uint256 _tokenId, string memory token_url) external;
}
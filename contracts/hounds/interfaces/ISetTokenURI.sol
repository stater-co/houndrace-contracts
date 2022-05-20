//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;


interface ISetTokenURI {

    function setTokenURI(uint256 _tokenId, string memory token_uri) external;

}
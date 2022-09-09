//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface ISetTokenURI {

    function setTokenURI(uint256 _tokenId, string memory token_uri) external;

}
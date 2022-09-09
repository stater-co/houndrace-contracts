//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface ISetTokenURI {

    function setTokenUri(uint256 theId, string memory token_uri) external;
    
}
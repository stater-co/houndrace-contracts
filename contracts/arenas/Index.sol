//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Arenas is Params {
    
    
    constructor(ArenasConstructor.Struct memory input) Params(input) {}

    function createArena(Arena.Struct memory arena) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }
    
    function editArena(uint256 theId, Arena.Struct memory arena) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function setTokenUri(uint256 theId, string memory token_uri) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return arenas[_tokenId].token_uri;
    }
    
}
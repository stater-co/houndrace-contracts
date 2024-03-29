//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './params/Index.sol';


contract Arenas is Params {
    
    constructor(ArenasConstructor.Struct memory input) Params(input) {}

    function createArena(Arena.Struct memory arena) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }
    
    function handleArenaUsage(uint256 arenaId) external {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function editArena(uint256 arenaId, Arena.Struct memory arena) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return arenas[_tokenId].token_uri;
    }
    
}
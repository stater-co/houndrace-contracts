//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';



contract ArenasRestricted is Params {

    constructor(ArenasConstructor.Struct memory input) Params(input) {}

    function createArena(Arena.Struct memory arena) external onlyOwner {
        arenas[id] = arena;

        // Mint arena
        _safeMint(msg.sender,id);

        emit NewArena(id,msg.sender,arena);

        // Increase arena id
        ++id;
    }
    
    function editArena(uint256 theId, Arena.Struct memory arena) external onlyOwner {
        require(ownerOf(theId) == owner());
        arenas[theId] = arena;
        emit EditArena(theId,msg.sender,arena);
    }

    function setTokenURI(uint256 _tokenId, string memory token_uri) external onlyOwner {
        arenas[_tokenId].token_uri = token_uri;
        emit NewTokenUri(_tokenId, token_uri);
    }

}
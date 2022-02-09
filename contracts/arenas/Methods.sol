//SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';

import './Arena.sol';


contract ArenasMethods is Ownable, ERC721, ERC721Holder {
    
    address public methodsContractAddress;
    uint256 public id = 1;
    string error = "Failed to delegatecall";
    mapping(uint256 => Arena.Struct) public arenas;
    
    event NewArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    event EditArena(uint256 indexed id, address indexed owner, Arena.Struct arena);

    constructor(string memory name, string memory symbol) ERC721(name,symbol) { }

    function setGlobalParameters(address methods) external {
        methodsContractAddress = methods;
    }

    function createArena(Arena.Struct memory arena) external {
        arenas[id] = arena;

        // Mint arena
        _safeMint(msg.sender,id);

        emit NewArena(id,msg.sender,arena);

        // Increase arena id
        ++id;
    }
    
    function editArena(uint256 theId, Arena.Struct memory arena) external {
        arenas[theId] = arena;
        emit EditArena(theId,msg.sender,arena);
    }
    
}
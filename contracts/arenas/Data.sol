//SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';

import './Arena.sol';


contract ArenasData is Ownable, ERC721, ERC721Holder {
    
    address public methodsContractAddress;
    uint256 public id = 1;
    string error = "Failed to delegatecall";
    mapping(uint256 => Arena.Struct) public arenas;
    
    event NewArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    event EditArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    
    constructor(address methods, string memory name, string memory symbol) ERC721(name,symbol) {
        methodsContractAddress = methods;
    }

    function setGlobalParameters(address methods) external onlyOwner {
        (bool success, ) = methods.delegatecall(msg.data);
        require(success,error);
    }

    function createArena(Arena.Struct memory arena) external onlyOwner {
        (bool success, ) = methodsContractAddress.delegatecall(msg.data);
        require(success,error);
    }
    
    function editArena(uint256 theId, Arena.Struct memory arena) external onlyOwner {
        (bool success, ) = methodsContractAddress.delegatecall(msg.data);
        require(success,error);
    }
    
    function arena(uint256 theId) external view returns(Arena.Struct memory) {
        return arenas[theId];
    }
    
}
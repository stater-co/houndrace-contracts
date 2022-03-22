//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '../arena/Index.sol';
import './Constructor.sol';

contract Params is Ownable, ERC721, ERC721Holder {

    ArenasConstructor.Struct public control;
    uint256 public id = 1;
    mapping(uint256 => Arena.Struct) public arenas;
    
    event NewArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    event EditArena(uint256 indexed id, address indexed owner, Arena.Struct arena);

    constructor(ArenasConstructor.Struct memory arenasConstructor) ERC721("","") {
        control = arenasConstructor;
    }

    function setGlobalParameters(ArenasConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

}
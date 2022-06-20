//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '../IIndex.sol';
import './Arena.sol';
import './Constructor.sol';
import '../../utils/Withdrawable.sol';


contract Params is Ownable, ERC721, ERC721Holder, Withdrawable {

    ArenasConstructor.Struct public control;
    uint256 public id = 1;
    mapping(uint256 => Arena.Struct) public arenas;
    
    event NewArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    event EditArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    event NewTokenUri(uint256 indexed id, string token_uri);

    constructor(ArenasConstructor.Struct memory input) ERC721(input.name,input.symbol) {
        control = input;
    }

    function setGlobalParameters(ArenasConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function arena(uint256 theId) external view returns(Arena.Struct memory) {
        return arenas[theId];
    }

    fallback() external payable {}
    receive() external payable {}

}
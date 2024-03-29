//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/utils/Address.sol';
import '../../payments/interfaces/IPay.sol';
import '../../whitelist/Index.sol';
import './Arena.sol';
import './Constructor.sol';


contract Params is ERC721, ERC721Holder, Whitelist {

    ArenasConstructor.Struct public control;
    uint256 public id = 1;
    mapping(uint256 => Arena.Struct) public arenas;
    
    event NewArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    event EditArena(uint256 indexed id, address indexed owner, Arena.Struct arena);

    constructor(ArenasConstructor.Struct memory input) ERC721(input.name,input.symbol) Whitelist(control.operators, control.targets) {
        control = input;
    }

    function setGlobalParameters(ArenasConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        updateWhitelist(globalParameters.operators, globalParameters.targets);
    }

    function arena(uint256 arenaId) external view returns(Arena.Struct memory) {
        return arenas[arenaId];
    }

    function platformAndArenaFee(uint256 arenaId) external view returns(uint256) {
        return arenas[arenaId].platformAndArenaFee;
    }

    function platformAndArenaFeeCurrency(uint256 arenaId) external view returns(address) {
        return arenas[arenaId].platformAndArenaFeeCurrency;
    }

    function arenaOwner(uint256 tokenId) external view returns(address) {
        return ownerOf(tokenId);
    }

}
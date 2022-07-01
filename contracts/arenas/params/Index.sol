//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/utils/Address.sol';
import '../../payments/interfaces/ITransferTokens.sol';
import './Arena.sol';
import './Constructor.sol';
import '../../utils/Withdrawable.sol';


contract Params is Ownable, ERC721, ERC721Holder, Withdrawable {

    ArenasConstructor.Struct public control;
    uint256 public id = 1;
    mapping(uint256 => Arena.Struct) public arenas;
    mapping(address => bool) public allowed;
    
    event NewArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    event EditArena(uint256 indexed id, address indexed owner, Arena.Struct arena);
    event NewTokenUri(uint256 indexed id, string token_uri);

    constructor(ArenasConstructor.Struct memory input) ERC721(input.name,input.symbol) {
        control = input;
        handleAllowedCallers(input.allowedCallers);
    }

    function setGlobalParameters(ArenasConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        handleAllowedCallers(globalParameters.allowedCallers);
    }

    function arena(uint256 theId) external view returns(Arena.Struct memory) {
        return arenas[theId];
    }

    function arenaOwner(uint256 tokenId) external view returns(address) {
        return ownerOf(tokenId);
    }

    function handleAllowedCallers(address[] memory allowedCallers) internal {
        for ( uint256 i = 0 ; i < allowedCallers.length ; ++i ) {
            allowed[allowedCallers[i]] = !allowed[allowedCallers[i]];
        }
    }

    fallback() external payable {}
    receive() external payable {}

}
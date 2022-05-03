//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Arena.sol';
import './params/Constructor.sol';


interface IArenas {

    function createArena(Arena.Struct memory arena) external;
    
    function editArena(uint256 theId, Arena.Struct memory arena) external;

    function setTokenUri(uint256 theId, string memory token_uri) external;

    function tokenURI(uint256 _tokenId) external view returns (string memory);

    function setGlobalParameters(ArenasConstructor.Struct memory globalParameters) external;
    
    function arena(uint256 theId) external view returns(Arena.Struct memory);
    
}
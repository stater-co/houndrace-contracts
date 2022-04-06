//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../arena/Index.sol';


interface IArenasRestricted {

    function createArena(Arena.Struct memory arena) external;
    
    function editArena(uint256 theId, Arena.Struct memory arena) external;

    function setTokenUri(uint256 theId, string memory token_uri) external;

}
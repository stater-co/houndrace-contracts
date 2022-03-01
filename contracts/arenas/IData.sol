//SPDX-License-Identifier: MIT
pragma solidity <=0.8.12;

import './Arena.sol';


interface IArenas {
    function createArena(Arena.Struct memory arena) external;
    function editArena(uint256 theId, Arena.Struct memory arena) external;
    function arena(uint256 theId) external view returns(Arena.Struct memory);
    function ownerOf(uint256 tokenId) external view returns(address);
}
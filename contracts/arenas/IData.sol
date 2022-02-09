//SPDX-License-Identifier: MIT
pragma solidity <=0.8.10;

import './Arena.sol';


interface ITerrains {
    function createTerrain(Arena.Struct memory terrain) external;
    function editTerrain(uint256 theId, Arena.Struct memory terrain) external;
    function getTerrain(uint256 theId) external view returns(Arena.Struct memory);
    function ownerOf(uint256 tokenId) external view returns(address);
}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;


interface IArenaOwner {

    function arenaOwner(uint256 tokenId) external view returns(address);
    
}
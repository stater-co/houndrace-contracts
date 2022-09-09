//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IArenaOwner {

    function arenaOwner(uint256 tokenId) external view returns(address);
    
}
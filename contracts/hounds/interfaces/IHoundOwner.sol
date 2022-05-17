//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IHoundOwner {

    function houndOwner(uint256 tokenId) external view returns(address);

}
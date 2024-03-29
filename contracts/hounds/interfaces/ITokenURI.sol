//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface ITokenURI {

    function tokenURI(uint256 _tokenId) external view returns (string memory);

}
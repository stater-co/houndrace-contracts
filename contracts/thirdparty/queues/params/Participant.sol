// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library Participant {
    
    struct Struct {

        address sourceContract;

        uint256 tokenId;

        uint256 enqueueDate;

        uint8 tokenType; // 0 - ERC721 , 1 - ERC1155

    }

}
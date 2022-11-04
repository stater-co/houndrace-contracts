// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library Discount {
    
    struct Struct {

        address tokenContract;

        uint256[] tokenIds;

        uint256 dateStart;

        uint256 dateStop;

        uint32 discount;

// TO ADD ERC20
        uint8 tokenType; // 0 - erc721 , 1 - erc1155 , 2 - geyser

        bool usable;

    }

}

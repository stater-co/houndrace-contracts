// SPDX-License-Identifier: MIT
pragma solidity <=0.8.15;


library Payment {
    
    struct Struct {
        address from;
        address payable to;
        address currency;
        uint256[] tokenIds;
        uint256 qty;
        // 0 - erc721
        // 1 - erc1155
        // 2 - erc20
        // 3 - erc20 race winner
        // 4 - erc20 fee
        uint32 paymentType;
        uint32 percentageWon;
        uint32 place;
    }

}

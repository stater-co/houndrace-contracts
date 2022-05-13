// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;


library Payment {
    
    struct Struct {
        address from;
        address payable to;
        address currency;
        uint256[] ids;
        uint256[] amounts;
        uint256 id;
        uint256 amount;
        // 0 - erc721
        // 1 - erc1155
        // 2 - erc20
        // 3 - ETH payment
        uint32 paymentType;
        uint32 percentageWon;
        uint32 place;
    }

}

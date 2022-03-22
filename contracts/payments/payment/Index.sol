// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;


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
        uint32 paymentType;
    }

}

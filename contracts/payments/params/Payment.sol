// SPDX-License-Identifier: MIT
pragma solidity <=0.8.15;


library Payment {
    
    struct Struct {
        address[] from;
        address[] to;
        address[] currencies;
        uint256[] ids;
        uint256[] amounts;
        uint32[] paymentType;
    }

}

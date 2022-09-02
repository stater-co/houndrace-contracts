//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../payments/params/Payment.sol';

library Box {

    struct Struct {
        address priceCurrency;
        address[] rewardContracts;
        uint256[] tokenIds;
        uint256[] amounts;
        uint256 price;
        Payment.PaymentTypes[] rewardTypes;
        bool generated;
    }
}
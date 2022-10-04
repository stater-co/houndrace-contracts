//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../payments/params/Payment.sol';

library Box {

    struct Struct {
        address[] rewardContracts;
        uint256[] tokenIds;
        uint256[] amounts;
        Payment.PaymentTypes[] rewardTypes;
    }
}
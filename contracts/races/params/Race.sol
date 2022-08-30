// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../payments/params/Payment.sol';

library Race {
    
    struct Struct {

        string name;

        address currency;

        uint256[] participants;

        uint256 arena;

        uint256 entryFee;

        uint256 randomness;

        uint256 raceFee;

        Payment.Struct payments;

        uint256 queueId;

        bytes seed;

    }

}

// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;
import '../../payments/params/Payment.sol';
import '../../payments/params/Reward.sol';


library Queue {
    
    struct Struct {

        Payment.Struct[] payments;

        Reward.Struct[] rewards;

        string name;

        address currency;

        uint256[] participants;

        uint256 arena;

        uint256 entryFee;

        uint256 entryFeeCurrency;

        uint256 startDate;

        uint256 endDate;

        uint32 totalParticipants;

    }

}
// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;
import './Payment.sol';
import './Reward.sol';


library Queue {
    
    struct Struct {

        string name;

        address currency;

        uint256[] participants;

        uint256 arena;

        uint256 entryFee;

        uint256 entryFeeCurrency;

        uint256 startDate;

        uint256 endDate;

        Payment.Struct[] payments;

        Reward.Struct[] rewards;

        uint32 totalParticipants;

    }

}
// SPDX-License-Identifier: MIT
pragma solidity <=0.8.15;
import '../../payments/params/Payment.sol';

library Queue {
    
    struct Struct {

        string name;

        address currency;

        uint256[] participants;

        uint256 arena;

        uint256 entryFee;

        uint256 startDate;

        uint256 endDate;

        Payment.Struct payments;

        uint32 totalParticipants;

        bool closed;

    }

}
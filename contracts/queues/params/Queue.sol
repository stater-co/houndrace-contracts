// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../payments/params/Payment.sol';

library Queue {
    
    struct Struct {

        string name;

        address feeCurrency;

        address entryFeeCurrency;

        uint256[] participants;

        uint256[] enqueueDates;

        uint256 arena;

        uint256 entryFee;

        uint256 startDate;

        uint256 endDate;

        uint256 lastCompletion;

        uint256 fee;

        Payment.Struct payments;

        uint32 totalParticipants;

        uint32 cooldown;

        bool closed;

    }

}
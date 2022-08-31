// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../payments/params/Payment.sol';
import './Core.sol';

library Queue {
    
    struct Struct {

        Core.Struct core;

        uint256 startDate;

        uint256 endDate;

        uint256 lastCompletion;

        uint32 totalParticipants;

        uint32 cooldown;

        bool closed;

    }

}
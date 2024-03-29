// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../payments/params/Payment.sol';
import './Core.sol';


library Queue {
    
    struct Struct {

        Core.Struct core;

        uint256[] speciesAllowed;

        uint256 startDate;

        uint256 endDate;

        uint256 lastCompletion;

        uint32 totalParticipants;

        uint32 cooldown;

        uint32 staminaCost;

        bool closed;

    }

}
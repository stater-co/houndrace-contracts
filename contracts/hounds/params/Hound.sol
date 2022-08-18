//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../races/params/HoundStatistics.sol';
import '../../gamification/params/HoundStamina.sol';
import '../../gamification/params/HoundBreeding.sol';
import './HoundIdentity.sol';

library Hound {

    struct Struct {
        HoundStatistics.Struct statistics;
        HoundStamina.Struct stamina;
        HoundBreeding.Struct breeding;
        HoundIdentity.Struct identity;
        string title;
        string token_uri;
        uint256 queueId;
        bool custom;
    }
}
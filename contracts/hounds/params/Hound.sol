//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../incubator/params/HoundIdentity.sol';
import '../../gamification/params/HoundBreeding.sol';
import '../../gamification/params/HoundStamina.sol';
import '../../races/params/HoundStatistics.sol';
import './HoundProfile.sol';


library Hound {
    struct Struct {
        HoundStatistics.Struct statistics;
        HoundStamina.Struct stamina;
        HoundBreeding.Struct breeding;
        HoundIdentity.Struct identity;
        HoundProfile.Struct profile;
    }
}
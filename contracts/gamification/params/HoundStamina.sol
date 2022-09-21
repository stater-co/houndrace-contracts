//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library HoundStamina {

    struct Struct {
        address staminaRefillCurrency;
        uint256 staminaLastUpdate;
        uint256 staminaRefill1x;
        uint256 refillStaminaCooldownCost;
        uint32 staminaValue;
        uint32 staminaPerTimeUnit;
        uint32 staminaCap;
    }

}
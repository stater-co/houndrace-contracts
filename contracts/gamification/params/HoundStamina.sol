//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

library HoundStamina {

    struct Struct {
        uint256 staminaLastUpdate;
        uint256 staminaRefill1x;
        uint32 staminaValue;
        uint32 staminaPerHour;
        uint32 staminaCap;
    }

}
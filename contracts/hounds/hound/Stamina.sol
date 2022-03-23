//SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;

library Stamina {
    struct Struct {
        uint256 lastUpdate;
        uint256 staminaRefill1x;
        uint32 stamina;
        uint32 staminaPerHour;
        uint32 staminaCap;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './HoundBreeding.sol';
import './HoundStamina.sol';

library Constructor {
    struct Struct {
        HoundBreeding.Struct defaultBreeding;
        HoundStamina.Struct defaultStamina;
        address[] allowed;
        address restricted;
        address methods;
    }
}

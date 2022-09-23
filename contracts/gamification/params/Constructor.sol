// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './HoundBreeding.sol';
import './HoundStamina.sol';
import '../../firewall/Index.sol';

library GamificationConstructor {
    struct Struct {
        FirewallConstructor.Struct firewall;
        HoundBreeding.Struct defaultBreeding;
        HoundStamina.Struct defaultStamina;
        address[] allowed;
        address restricted;
        address methods;
    }
}

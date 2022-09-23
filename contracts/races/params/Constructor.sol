// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../firewall/params/Constructor.sol';

library RacesConstructor {
    struct Struct {
        FirewallConstructor.Struct firewall;
        address randomness;
        address arenas;
        address hounds;
        address methods;
        address generator;
        address payments;
        address restricted;
        address queues;
        address races;
        bool callable;
    }
}
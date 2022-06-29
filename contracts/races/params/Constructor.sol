// SPDX-License-Identifier: MIT
pragma solidity <=0.8.15;

library RacesConstructor {
    struct Struct {
        address randomness;
        address arenas;
        address hounds;
        address methods;
        address generator;
        address payments;
        address restricted;
        address allowed;
        address staterApi;
        address queues;
        address directives;
        uint256 raceFee;
        bool callable;
    }
}
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
        address staterApi;
        address queues;
        address directives;
        address[] allowedCallers;
        uint256 raceFee;
        bool callable;
    }
}
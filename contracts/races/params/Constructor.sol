// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library RacesConstructor {
    struct Struct {
        address randomness;
        address arenas;
        address hounds;
        address methods;
        address generator;
        address payments;
        address restricted;
        address queues;
        address[] allowedCallers;
        bool callable;
    }
}
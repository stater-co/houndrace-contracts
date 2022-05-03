// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;

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
        uint256 raceFee;
        bool callable;
    }
}
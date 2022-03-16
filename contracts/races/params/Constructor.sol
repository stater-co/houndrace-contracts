// SPDX-License-Identifier: MIT
pragma solidity <=0.8.12;

library RacesConstructor {
    struct Struct {
        address randomness;
        address arenas;
        address hounds;
        address methods;
        address generator;
        address payments;
        address restricted;
        uint256 raceFee;
        bool callable;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;

library RacesConstructor {
    struct Struct {
        address randomness;
        address arenas;
        address hounds;
        address generator;
        address payments;
        address restricted;
        uint256 raceFee;
        bool callable;
    }
}
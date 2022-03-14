// SPDX-License-Identifier: MIT
pragma solidity <=0.8.12;

library RacesConstructor {
    struct Struct {
        address randomness;
        address terrains;
        address hounds;
        address allowed;
        address methods;
        address raceGenerator;
        address payments;
        address restricted;
        address zerocost;
        address arenaZerocost;
        uint256 raceFee;
        bool callable;
    }
}
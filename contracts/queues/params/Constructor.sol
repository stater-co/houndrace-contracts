// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

library QueuesConstructor {
    struct Struct {
        address arenas;
        address hounds;
        address methods;
        address payments;
        address restricted;
        address races;
        address[] allowedCallers;
        uint256 raceFee;
    }
}
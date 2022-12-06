// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library ArenasConstructor {
    struct Struct {
        string name;
        string symbol;
        address[] operators;
        address restricted;
        address methods;
        address payments;
        address alphadune;
        bytes4[][] targets;
        uint256 alphadunePercentage;
    }
}

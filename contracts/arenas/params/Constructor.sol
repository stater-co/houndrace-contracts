// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;


library ArenasConstructor {
    struct Struct {
        string name;
        string symbol;
        address restricted;
        address methods;
        address payments;
        address alphadune;
        address[] allowedCallers;
    }
}

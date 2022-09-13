// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library QueuesConstructor {
    struct Struct {

        // Contract modules
        address methods;
        address restricted;
        address queues;
        address zerocost;

        // External dependencies
        address arenas;
        address hounds;
        address payments;
        address races;
        address incubator;
        
        // Whitelist boilerplate
        address[] allowedCallers;
    }
}
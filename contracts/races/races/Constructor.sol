// SPDX-License-Identifier: MIT
pragma solidity <=0.8.12;


library Constructor {
    
    struct Struct {

        address randomness;
        address terrains;
        address hounds;
        address allowed;
        address methods;
        address raceGenerator;
        address payments;

        /* Stater race fee */
        uint256 raceFee;

        /* False if race is uploaded by admin, true if it's blockchain generated */
        bool callable;
    }

}
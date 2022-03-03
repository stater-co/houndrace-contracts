// SPDX-License-Identifier: MIT
pragma solidity <=0.8.12;

library Constructor {
    struct Struct {
        string name;
        string symbol;
        address[] allowedCallers;
        address methods;
        address incubator;
        address staterApi;
        address shop;
        address payments;
        uint256 breedCost;
        uint256 breedFee;
        uint256 refillCost;
        uint256 refillBreedingCooldownCost;
        uint256 refillStaminaCooldownCost;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity <=0.8.10;


library GlobalVariables {
    
    struct Struct {
        address[] allowedCallers;
        address methods;
        address incubator;
        address staterApi;
        address shop;
        uint256 breedCost;
        uint256 breedFee;
        uint256 refillCost;
        uint256 refillBreedingCooldownCost;
        uint256 refillStaminaCooldownCost;
        bool[] isAllowed;
    }

}

// SPDX-License-Identifier: MIT
pragma solidity <=0.8.14;

library ConstructorFees {
    struct Struct {
        uint256 breedCost;
        uint256 breedFee;
        uint256 refillCost;
        uint256 refillBreedingCooldownCost;
        uint256 refillStaminaCooldownCost;
    }
}

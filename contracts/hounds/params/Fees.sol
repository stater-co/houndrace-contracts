// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;

library ConstructorFees {
    struct Struct {
        address breedCostCurrency;
        address breedFeeCurrency;
        address refillCostCurrency;
        uint256 breedCost;
        uint256 breedFee;
        uint256 refillCost;
        uint256 refillBreedingCooldownCost;
        uint256 refillStaminaCooldownCost;
    }
}

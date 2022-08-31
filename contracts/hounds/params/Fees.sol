// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

library ConstructorFees {
    struct Struct {
        address currency;
        address breedCostCurrency;
        address breedFeeCurrency;
        uint256 breedCost;
        uint256 breedFee;
        uint256 refillCost;
        uint256 refillBreedingCooldownCost;
        uint256 refillStaminaCooldownCost;
    }
}

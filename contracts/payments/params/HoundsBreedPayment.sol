//SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;

library HoundsBreedPayment {

    struct Struct {
        address breedCostCurrency;
        address breedFeeCurrency;
        address breedingFeeCurrency;
        address staterApi;
        address foreignOwner;
        uint256 breedCost;
        uint256 breedingFee;
        uint256 breedFee;
        bool secondHoundOwned;
    }
}
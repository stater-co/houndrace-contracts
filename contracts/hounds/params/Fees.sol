// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library ConstructorFees {
    struct Struct {
        address renameFeeCurrency;
        address breedCostCurrency;
        address alphaduneFeeCurrency;
        uint256 breedCost;
        uint256 alphaduneFee;
        uint256 renameFee;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library ConstructorFees {
    struct Struct {
        address renameFeeCurrency;
        address platformBreedFeeCurrency;
        address breedTransactionFeeCurrency;
        uint256 platformBreedFee;
        uint256 breedTransactionFee;
        uint256 renameFee;
    }
}

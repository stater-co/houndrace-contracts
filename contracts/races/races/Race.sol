// SPDX-License-Identifier: MIT
pragma solidity <=0.8.11;

library Race {
    
    struct Struct {

        // address(0) for ETH
        address currency;

        // Race seed
        uint256[] participants;

        // arena of the race
        uint256 arena;

        // ETH based
        uint256 entryFee;

        // Race randomness
        uint256 seed;

        // Informations about the winners of the race
        uint256[] winnersPercentagePrize;

    }

}

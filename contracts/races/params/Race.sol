// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;


library Race {
    
    struct Struct {

        string name;

        // address(0) for ETH
        address currency;

        // Race seed
        uint256[] participants;

        // arena of the race
        uint256 arena;

        // ETH based
        uint256 entryFee;

        // Informations about the winners of the race
        uint256 rewardsId;

        // Race randomness
        uint256 randomness;

        // Race seed
        bytes seed;

    }

}

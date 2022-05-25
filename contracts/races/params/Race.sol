// SPDX-License-Identifier: MIT
pragma solidity <=0.8.14;


library Race {
    
    struct Struct {

        string name;

        address currency;

        uint256[] participants;

        uint256 arena;

        uint256 entryFee;

        // Informations about the winners of the race
        uint256 rewardsId;

        uint256 randomness;

        bytes seed;

    }

}

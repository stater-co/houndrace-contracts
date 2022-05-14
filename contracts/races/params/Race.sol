// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;


library Race {
    
    struct Struct {

        string name;

        address currency;

        uint256[] participants;

        uint256 arena;

        uint256 entryFee;

        uint256 randomness;

        uint256 paymentsId;

        uint256 rewardsId;

        bytes seed;

    }

}

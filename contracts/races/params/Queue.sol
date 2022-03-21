// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;


library Queue {
    
    struct Struct {

        string name;

        // address(0) for ETH
        address currency;

        uint256[] participants;

        // arena of the race
        uint256 arena;

        // ETH based
        uint256 entryFee;

        // Start date
        uint256 startDate;

        // End date
        uint256 endDate;

        // Informations about the winners of the race
        uint256 rewardsId;

        // Total number of participants
        uint32 totalParticipants;

    }

}
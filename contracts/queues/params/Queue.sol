// SPDX-License-Identifier: MIT
pragma solidity <=0.8.14;


library Queue {
    
    struct Struct {

        string name;

        address currency;

        uint256[] participants;

        uint256 arena;

        uint256 entryFee;

        uint256 startDate;

        uint256 endDate;

        // Informations about the winners of the race
        uint256 rewardsId;

        uint32 totalParticipants;

        bool closed;

    }

}
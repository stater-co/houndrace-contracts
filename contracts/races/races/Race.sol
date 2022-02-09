// SPDX-License-Identifier: MIT
pragma solidity <=0.8.10;


library Race {
    
    /**
     * DIIMIIM:
     * Participants can pay with multiple currencies, ETH included
     */
    struct Struct {

        // address(0) for ETH
        address currency;

        // Participants
        // totalParticipants will be the array length here
        uint256[] participants;

        // arena of the race
        uint256 arena;

        // ETH based
        uint256 entryFee;

        // Start date
        uint256 startDate;

        // Total number of participants
        uint32 totalParticipants;

    }

    struct Finished {

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

    }

}

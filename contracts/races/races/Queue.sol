// SPDX-License-Identifier: MIT
pragma solidity <=0.8.11;
import '../../payments/Payment.sol';

library Queue {
    
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

        // End date
        uint256 endDate;

        // Informations about the winners of the race
        uint256 rewardsId;

        // Total number of participants
        uint32 totalParticipants;

    }

}
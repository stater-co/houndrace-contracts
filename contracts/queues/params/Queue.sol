// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;


library Queue {
    
    struct Struct {

        string name;

        address currency;

        uint256[] participants;

        uint256 arena;

        uint256 entryFee;

        uint256 entryFeeCurrency;

        uint256 startDate;

        uint256 endDate;

        uint256 directiveId;

        uint32 totalParticipants;

    }

}
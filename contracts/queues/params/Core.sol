// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../payments/params/Payment.sol';

library Core {
    
    struct Struct {

        string name;

        address feeCurrency;

        address raceEntryTicketCurrency;

        uint256[] participants;

        uint256[] enqueueDates;

        uint256 arena;

        uint256 raceEntryTicket;

        uint256 fee;

    }

}
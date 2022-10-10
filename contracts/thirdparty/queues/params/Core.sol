// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../../payments/params/Payment.sol';
import './Participant.sol';

library Core {
    
    struct Struct {

        string name;

        address feeCurrency;

        address entryFeeCurrency;

        Participant.Struct[] participants;

        uint256 arena;

        uint256 entryFee;

        uint256 fee;

        Payment.Struct payments;

    }

}
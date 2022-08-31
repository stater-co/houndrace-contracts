// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../payments/params/Payment.sol';
import '../../queues/params/Core.sol';

library Race {
    
    struct Struct {

        Core.Struct core;

        uint256 randomness;

        uint256 queueId;

        bytes seed;

    }

}

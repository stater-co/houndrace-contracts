//SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;

library Breeding {
    struct Struct {
        uint256 breedCooldown;
        uint256 breedingFee;
        uint256 breedLastUpdate;
        bool availableToBreed;
    }
}
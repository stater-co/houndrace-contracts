// SPDX-License-Identifier: MIT
pragma solidity <=0.8.15;


library IncubatorConstructor {
    
    struct Struct {
        address methods;
        address randomness;
        address genetics;
        uint256 secondsToMaturity;
        uint256 maleBreedingCooldown; // 30 minutes
        uint256 femaleBreedingCooldown; // 4 weeks
        uint256 houndBreedingFee; // .3 ether
    }

}

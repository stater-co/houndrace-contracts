//SPDX-License-Identifier: MIT
pragma solidity <=0.8.15;

library Hound {

    struct Breeding {
        uint256 breedCooldown;
        uint256 breedingFee;
        uint256 breedLastUpdate;
        uint256 breedingPeriod;
        uint256 breedingStart;
        bool availableToBreed;
    }

    struct Identity {
        uint256 maleParent;
        uint256 femaleParent;
        uint256 generation;
        uint256 birthDate;
        uint256 secondsToMaturity;
        uint32[54] geneticSequence;
    }

    struct Stamina {
        uint256 staminaLastUpdate;
        uint256 staminaRefill1x;
        uint32 staminaValue;
        uint32 staminaPerHour;
        uint32 staminaCap;
    }

    struct Statistics {
        uint64 totalRuns;
        uint64 firstPlace;
        uint64 secondPlace;
        uint64 thirdPlace;
    }

    struct Struct {
        Statistics statistics;
        Stamina stamina;
        Breeding breeding;
        Identity identity;
        string title;
        string token_uri;
        uint256 running;
        bool custom;
    }
}
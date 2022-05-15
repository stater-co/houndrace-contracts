//SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;

library Hound {

    struct Breeding {
        address breedingFeeCurrency;
        uint256 breedCooldown;
        uint256 breedingFee; // ETH only
        uint256 breedLastUpdate;
        bool availableToBreed;
    }

    struct Identity {
        uint256 maleParent;
        uint256 femaleParent;
        uint256 generation;
        uint256 birthDate;
        uint32[54] geneticSequence;
    }

    struct Stamina {
        address staminaRefill1xCurrency;
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
        bool custom;
        bool running;
    }
}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library Hound {

    struct Profile {
        string name;
        string token_uri;
        uint256 runningOn;
        bool custom;
    }

    struct Breeding {
        address breedingFeeCurrency; // constructor
        address breedingCooldownCurrency; // constructor
        uint256 lastBreed;
        uint256 breedingCooldown; // constructor
        uint256 breedingFee;
        uint256 breedingCooldownTimeUnit; // constructor
        uint256 refillBreedingCooldownCost; // constructor
        bool availableToBreed;
    }

    struct Stamina {
        address staminaRefillCurrency; // constructor
        uint256 staminaLastUpdate;
        uint256 staminaRefill1x; // constructor
        uint32 staminaValue;
        uint32 staminaPerTimeUnit; // constructor
        uint32 staminaCap; // constructor
    }

    struct Identity {
        uint256 maleParent;
        uint256 femaleParent;
        uint256 generation;
        uint256 birthDate;
        uint256 specie;
        uint32[72] geneticSequence;
        string extensionTraits;
    }

    struct Struct {
        Stamina stamina;
        Breeding breeding;
        Identity identity;
        Profile profile;
    }

}
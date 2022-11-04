//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library Hound {

    struct ConstructorBreeding {
        address breedingFeeCurrency;
        address breedingCooldownCurrency;
        uint256 breedingCooldown;
        uint256 breedingCooldownTimeUnit;
        uint256 refillBreedingCooldownCost;
    }

    struct ConstructorStamina {
        address staminaRefillCurrency;
        uint256 staminaRefill1x;
        uint32 staminaPerTimeUnit;
        uint32 staminaCap;
    }

    struct Profile {
        string name;
        string token_uri;
        uint256 runningOn;
        bool custom;
    }

    struct Breeding {
        uint256 lastBreed;
        uint256 breedingFee;
        bool availableToBreed;
    }

    struct Stamina {
        uint256 staminaLastUpdate;
        uint32 staminaValue;
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
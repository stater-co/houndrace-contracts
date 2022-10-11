//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Specie.sol';


library Hound {

    struct Profile {
        string name;
        string token_uri;
        uint256 runningOn;
        bool custom;
    }

    struct Breeding {
        address breedingFeeCurrency;
        address breedingCooldownCurrency;
        uint256 lastBreed;
        uint256 breedingCooldown;
        uint256 breedingFee;
        uint256 breedingCooldownTimeUnit;
        uint256 refillBreedingCooldownCost;
        bool availableToBreed;
    }

    struct Stamina {
        address staminaRefillCurrency;
        uint256 staminaLastUpdate;
        uint256 staminaRefill1x;
        uint32 staminaValue;
        uint32 staminaPerTimeUnit;
        uint32 staminaCap;
    }

    struct Identity {
        uint256 maleParent;
        uint256 femaleParent;
        uint256 generation;
        uint256 birthDate;
        uint32[54] geneticSequence;
        string extensionTraits;
        Specie.Enum specie;
    }

    struct Struct {
        Stamina stamina;
        Breeding breeding;
        Identity identity;
        Profile profile;
    }

}
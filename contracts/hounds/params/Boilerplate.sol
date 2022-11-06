// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library ConstructorBoilerplate {
    struct Struct {

        // Contract modules 
        address restricted;
        address minter;
        address houndsModifier;
        address zerocost;
        address hounds;

        // External dependencies
        address payments;
        address shop;
        address races;
        address genetics;

        // Payout checkpoint
        address houndsInitializer;
        address houndsRenameHandler;
        
    }
}

//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Specie.sol';

library HoundIdentity {

    struct Struct {
        uint256 maleParent;
        uint256 femaleParent;
        uint256 generation;
        uint256 birthDate;
        uint32[54] geneticSequence;
        string extensionTraits;
        Specie.Enum specie;
    }

}
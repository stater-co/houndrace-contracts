// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;

library Identity {
    struct Struct {
        uint256 maleParent;
        uint256 femaleParent;
        uint256 generation;
        uint32[54] geneticSequence;
    }
}

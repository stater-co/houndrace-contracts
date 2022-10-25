// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library GeneticsConstructor {
    
    struct Struct {
        uint32[72] male;
        uint32[72] female;
        uint32 maleGenesProbability;
        uint32 femaleGenesProbability;
        uint32[13] geneticSequenceSignature;
        uint32[72] maxValues;
    }

}

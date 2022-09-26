// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library GeneticsConstructor {
    
    struct Struct {
        address randomness;
        address terrains;
        address firewall;
        uint32[54] male;
        uint32[54] female;
        uint32 maleGenesProbability;
        uint32 femaleGenesProbability;
        uint32[13] geneticSequenceSignature;
        uint32[54] maxValues;
    }

}

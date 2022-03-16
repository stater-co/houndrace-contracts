// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';

contract Incubator is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1, uint32[54] memory hound1GeneticSequence, uint256 hound2, uint32[54] memory hound2GeneticSequence) public view returns(Hound.Struct memory) {
        return IIncubatorMethods(control.methods).breedHounds(hound1, hound1GeneticSequence, hound2, hound2GeneticSequence);
    }

}
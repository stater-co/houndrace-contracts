// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import './params/Index.sol';

contract Incubator is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1Id, Hound.Struct memory hound1, uint256 hound2Id, Hound.Struct memory hound2) public view returns(Hound.Struct memory) {
        return IBreedHounds(control.methods).breedHounds(hound1Id, hound1, hound2Id, hound2);
    }

}
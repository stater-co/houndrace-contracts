// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';

contract Incubator is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 h1, Hound.Struct memory hound1, uint256 h2, Hound.Struct memory hound2) public view returns(Hound.Struct memory) {
        return IIncubatorMethods(control.methods).breedHounds(h1, hound1, h2, hound2);
    }

}
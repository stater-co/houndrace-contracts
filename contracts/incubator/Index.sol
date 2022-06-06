// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import './params/Index.sol';

contract Incubator is Params {

    function breedHounds(bytes memory rawInput) public view returns(Hound.Struct memory) {
        return IBreedHounds(control.methods).breedHounds(rawInput);
    }

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Randomness is Params {

    constructor(RandomnessConstructor.Struct memory input) Params(input) {}

    function getRandomNumber(bytes memory input) external view returns(uint256) {
        return IRandomnessZerocost(control.zerocost).getRandomNumber(input);
    }

}
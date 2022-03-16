// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';


contract Randomness is Params {

    constructor(RandomnessConstructor.Struct memory randomnessConstructor) Params(randomnessConstructor) {}

    function getRandomNumber(bytes memory input) external view returns(uint256) {
        return IRandomnessZerocost(control.zerocost).getRandomNumber(input);
    }


}


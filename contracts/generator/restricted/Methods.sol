// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';

contract RaceGeneratorMethods is Params {

    function setGlobalParameters(
        GeneratorConstructor.Struct memory input
    ) external {
        control = input;
    }

}

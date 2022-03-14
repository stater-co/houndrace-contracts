// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Constructor.sol';

interface IGeneratorRestricted {

    function setGlobalParameters(GeneratorConstructor.Struct memory input) external;

}
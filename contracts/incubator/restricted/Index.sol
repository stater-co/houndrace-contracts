// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Constructor.sol';


contract IncubatorRestrictedMethods {
    
    IncubatorConstructor.Struct public control;
    
    function setGlobalParameters(IncubatorConstructor.Struct memory input) external {
        control = input;
    }

}
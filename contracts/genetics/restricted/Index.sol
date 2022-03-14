// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Constructor.sol';


contract GeneticsRestrictedMethods {

    GeneticsConstructor.Struct public control;
    
    function setGlobalParameters(GeneticsConstructor.Struct memory input) external {
        control = input;
    }
}

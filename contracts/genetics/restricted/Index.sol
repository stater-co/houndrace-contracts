// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract GeneticsRestricted is Params {
    
    function setGlobalParameters(GeneticsConstructor.Struct memory input) external {
        control = input;
    }
}

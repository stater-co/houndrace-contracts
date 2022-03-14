// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Constructor.sol';


interface IGeneticsRestricted {
    
    function setGlobalParameters(GeneticsConstructor.Struct memory input) external;

}

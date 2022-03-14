// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Constructor.sol';


interface IIncubatorRestrictedMethods {
    
    function setGlobalParameters(IncubatorConstructor.Struct memory input) external;

}
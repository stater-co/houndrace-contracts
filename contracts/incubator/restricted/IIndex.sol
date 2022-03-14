// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Constructor.sol';


interface IIncubatorRestricted {
    
    function setGlobalParameters(IncubatorConstructor.Struct memory input) external;

}
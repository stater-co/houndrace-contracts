// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Constructor.sol';


interface ISetGlobalParameters { 

    function setGlobalParameters(QueuesConstructor.Struct memory input) external;

}

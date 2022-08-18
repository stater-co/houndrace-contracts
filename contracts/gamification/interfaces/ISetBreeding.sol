//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/HoundBreeding.sol';


interface ISetBreeding {

    function setBreeding(uint256 id, HoundBreeding.Struct memory breeding) external;

}
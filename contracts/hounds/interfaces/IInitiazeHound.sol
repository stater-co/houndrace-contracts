//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Hound.sol';


interface IInitializeHound {

    function initializeHound(uint256 onId, Hound.Struct memory theHound) external;

}
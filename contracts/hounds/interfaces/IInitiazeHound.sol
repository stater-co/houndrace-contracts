//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Hound.sol';


interface IInitializeHound {

    function initializeHound(uint256 onId, address owner, Hound.Struct memory theHound) external;

}
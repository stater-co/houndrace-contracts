// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../../hounds/hound/Index.sol';


interface IIncubatorMethods {

    function breedHounds(uint256 h1, Hound.Struct memory hound1, uint256 h2, Hound.Struct memory hound2) external view returns(Hound.Struct memory);

}
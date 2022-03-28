// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../../hounds/hound/Index.sol';


interface IIncubatorMethods {

    function breedHounds(uint256 hound1Id, Hound.Struct memory hound1, uint256 hound2Id, Hound.Struct memory hound2) external view returns(Hound.Struct memory);

}
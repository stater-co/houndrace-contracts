// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../../hounds/hound/Index.sol';


interface IIncubatorMethods {

    function breedHounds(uint256 hound1, uint32[54] memory hound1GeneticSequence, uint256 hound2, uint32[54] memory hound2GeneticSequence) external view returns(Hound.Struct memory);

}
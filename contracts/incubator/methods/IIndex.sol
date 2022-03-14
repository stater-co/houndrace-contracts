// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../../hounds/hound/Index.sol';


interface IIncubatorMinterMethods {

    function breedHounds(uint256 hound1, uint32[54] memory hound1GeneticSequence, uint256 hound2, uint32[54] memory hound2GeneticSequence) external view returns(Hound.Struct memory);

}
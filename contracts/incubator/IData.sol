// SPDX-License-Identifier: MIT
pragma solidity <=0.8.11;

import '../hounds/Hound.sol';


interface IIncubatorData {
    function breedHounds(uint256 hound1, uint32[50] memory hound1GeneticSequence, uint256 hound2, uint32[50] memory hound2GeneticSequence) external returns(Hound.Struct memory);
}
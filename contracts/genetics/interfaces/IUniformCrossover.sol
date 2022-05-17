// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IUniformCrossover {

    function uniformCrossover(uint32[54] calldata geneticSequence1, uint32[54] calldata geneticSequence2, uint256 randomness) external view returns(uint32[54] memory geneticSequence);

}

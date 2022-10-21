// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IUniformCrossover {

    function uniformCrossover(uint32[72] calldata geneticSequence1, uint32[72] calldata geneticSequence2, uint256 randomness) external view returns(uint32[72] memory geneticSequence);

}

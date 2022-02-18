// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;


interface IGeneticsMethods {
    function wholeArithmeticRecombination(uint32[50] memory geneticSequence1, uint32[50] memory geneticSequence2) external pure returns(uint32[50] memory geneticSequence);
    function swapMutation(uint32[50] memory geneticSequence, uint256 randomness) external pure returns(uint32[50] memory);
    function inversionMutation(uint32[50] memory geneticSequence, uint256 randomness) external pure returns(uint32[50] memory);
    function scrambleMutation(uint32[50] memory geneticSequence, uint256 randomness) external pure returns(uint32[50] memory);
    function arithmeticMutation(uint32[50] memory geneticSequence, uint256 randomness) external pure returns(uint32[50] memory);
    function uniformCrossover(uint32[50] calldata geneticSequence1, uint32[50] calldata geneticSequence2, uint256 randomness) external view returns(uint32[50] memory geneticSequence);
    function mixGenes(uint32[50] calldata geneticSequence1, uint32[50] calldata geneticSequence2, uint256 randomness) external view returns(uint32[50] memory);
}

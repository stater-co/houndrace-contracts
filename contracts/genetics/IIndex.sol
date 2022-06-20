// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;


interface IGenetics {

    function wholeArithmeticRecombination(uint32[54] memory geneticSequence1, uint32[54] memory geneticSequence2) external view returns(uint32[54] memory geneticSequence);

    function swapMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory);

    function inversionMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory);

    function scrambleMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory);
    
    function arithmeticMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory);

    function uniformCrossover(uint32[54] calldata geneticSequence1, uint32[54] calldata geneticSequence2, uint256 randomness) external view returns(uint32[54] memory geneticSequence);

    function mixGenes(uint32[54] calldata geneticSequence1, uint32[54] calldata geneticSequence2, uint256 randomness) external view returns(uint32[54] memory);

}

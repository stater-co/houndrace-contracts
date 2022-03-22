// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './zerocost/IIndex.sol';
import './params/Index.sol';


contract Genetics is Params {
    
    constructor(
        GeneticsConstructor.Struct memory input
    ) Params(input) {}

    function wholeArithmeticRecombination(uint32[54] memory geneticSequence1, uint32[54] memory geneticSequence2) external view returns(uint32[54] memory) {
        return IGeneticsZerocost(control.zerocost).wholeArithmeticRecombination(geneticSequence1, geneticSequence2);
    }
    
    function swapMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocost(control.zerocost).swapMutation(geneticSequence, randomness);
    }

    function inversionMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocost(control.zerocost).inversionMutation(geneticSequence, randomness);
    }

    function scrambleMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocost(control.zerocost).scrambleMutation(geneticSequence, randomness);
    }
    
    function arithmeticMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocost(control.zerocost).arithmeticMutation(geneticSequence, randomness);
    }

    function uniformCrossover(uint32[54] calldata geneticSequence1, uint32[54] calldata geneticSequence2, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocost(control.zerocost).uniformCrossover(geneticSequence1, geneticSequence2, randomness);
    }

    function mixGenes(uint32[54] calldata geneticSequence1, uint32[54] calldata geneticSequence2, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocost(control.zerocost).mixGenes(geneticSequence1, geneticSequence2, randomness);
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;
import '@openzeppelin/contracts/access/Ownable.sol';
import './IData.sol';
import './Constructor.sol';


contract GeneticsData is Ownable {

    string error = "Failed to delegatecall";

    Constructor.Struct public control;
    
    constructor(Constructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(Constructor.Struct memory input) external onlyOwner {
        (bool success, ) = input.methods.delegatecall(msg.data);
        require(success,error);
    }

    function wholeArithmeticRecombination(uint32[50] memory geneticSequence1, uint32[50] memory geneticSequence2) external view returns(uint32[50] memory) {
        return IGeneticsMethods(control.methods).wholeArithmeticRecombination(geneticSequence1, geneticSequence2);
    }
    
    function swapMutation(uint32[50] memory geneticSequence, uint256 randomness) external view returns(uint32[50] memory) {
        return IGeneticsMethods(control.methods).swapMutation(geneticSequence, randomness);
    }

    function inversionMutation(uint32[50] memory geneticSequence, uint256 randomness) external view returns(uint32[50] memory) {
        return IGeneticsMethods(control.methods).inversionMutation(geneticSequence, randomness);
    }

    function scrambleMutation(uint32[50] memory geneticSequence, uint256 randomness) external view returns(uint32[50] memory) {
        return IGeneticsMethods(control.methods).scrambleMutation(geneticSequence, randomness);
    }
    
    function arithmeticMutation(uint32[50] memory geneticSequence, uint256 randomness) external view returns(uint32[50] memory) {
        return IGeneticsMethods(control.methods).arithmeticMutation(geneticSequence, randomness);
    }

    function uniformCrossover(uint32[50] calldata geneticSequence1, uint32[50] calldata geneticSequence2, uint256 randomness) external view returns(uint32[50] memory) {
        return IGeneticsMethods(control.methods).uniformCrossover(geneticSequence1, geneticSequence2, randomness);
    }

    function mixGenes(uint32[50] calldata geneticSequence1, uint32[50] calldata geneticSequence2, uint256 randomness) external view returns(uint32[50] memory) {
        return IGeneticsMethods(control.methods).mixGenes(geneticSequence1, geneticSequence2, randomness);
    }

}

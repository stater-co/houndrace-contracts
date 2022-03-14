// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import './methods/IIndex.sol';
import './params/Constructor.sol';


contract Genetics is Ownable {

    GeneticsConstructor.Struct public control;
    
    constructor(GeneticsConstructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(GeneticsConstructor.Struct memory input) external onlyOwner {
        (bool success, ) = input.restricted.delegatecall(msg.data);
        require(success);
    }

    function wholeArithmeticRecombination(uint32[54] memory geneticSequence1, uint32[54] memory geneticSequence2) external view returns(uint32[54] memory) {
        return IGeneticsZerocostMethods(control.zerocost).wholeArithmeticRecombination(geneticSequence1, geneticSequence2);
    }
    
    function swapMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocostMethods(control.zerocost).swapMutation(geneticSequence, randomness);
    }

    function inversionMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocostMethods(control.zerocost).inversionMutation(geneticSequence, randomness);
    }

    function scrambleMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocostMethods(control.zerocost).scrambleMutation(geneticSequence, randomness);
    }
    
    function arithmeticMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocostMethods(control.zerocost).arithmeticMutation(geneticSequence, randomness);
    }

    function uniformCrossover(uint32[54] calldata geneticSequence1, uint32[54] calldata geneticSequence2, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocostMethods(control.zerocost).uniformCrossover(geneticSequence1, geneticSequence2, randomness);
    }

    function mixGenes(uint32[54] calldata geneticSequence1, uint32[54] calldata geneticSequence2, uint256 randomness) external view returns(uint32[54] memory) {
        return IGeneticsZerocostMethods(control.zerocost).mixGenes(geneticSequence1, geneticSequence2, randomness);
    }

}

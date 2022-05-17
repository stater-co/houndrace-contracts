// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IWholeArithmeticRecombination {

    function wholeArithmeticRecombination(uint32[54] memory geneticSequence1, uint32[54] memory geneticSequence2) external view returns(uint32[54] memory geneticSequence);

}

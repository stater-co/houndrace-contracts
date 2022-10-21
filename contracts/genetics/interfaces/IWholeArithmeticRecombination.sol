// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IWholeArithmeticRecombination {

    function wholeArithmeticRecombination(uint32[72] memory geneticSequence1, uint32[72] memory geneticSequence2) external view returns(uint32[72] memory geneticSequence);

}

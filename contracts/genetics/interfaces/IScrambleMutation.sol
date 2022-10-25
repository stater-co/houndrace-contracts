// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IScrambleMutation {

    function scrambleMutation(uint32[72] memory geneticSequence, uint256 randomness) external view returns(uint32[72] memory);
    
}

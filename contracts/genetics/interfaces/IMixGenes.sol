// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IMixGenes {

    function mixGenes(uint32[72] calldata geneticSequence1, uint32[72] calldata geneticSequence2, uint256 randomness) external view returns(uint32[72] memory);

}

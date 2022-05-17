// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface ISwapMutation {

    function swapMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory);

}

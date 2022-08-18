// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;


interface IArithmeticMutation {

    function arithmeticMutation(uint32[54] memory geneticSequence, uint256 randomness) external view returns(uint32[54] memory);

}

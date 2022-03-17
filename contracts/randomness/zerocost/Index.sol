// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RandomnessZerocost is Params {

    constructor(RandomnessConstructor.Struct memory randomnessConstructor) Params(randomnessConstructor) {}

    function getRandomNumber(bytes memory input) external view returns(uint256) {
        return uint256(
            keccak256(
                abi.encodePacked(
                    block.difficulty, 
                    block.timestamp, 
                    block.gaslimit,
                    blockhash(block.number-1),
                    input
                )
            )
        );
    }

}


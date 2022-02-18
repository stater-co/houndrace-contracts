// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import '../hounds/Hound.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import '../randomness/vanilla/IData.sol';
import '../genetics/IData.sol';


contract IncubatorData is Ownable {
    
    Constructor.Struct public control;
    string error = "Failed to delegatecall";

    /**
     * DIIMIIM:
     * @param input: the genetic sequence handler
     */
    constructor(Constructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(Constructor.Struct memory input) external onlyOwner {
        (bool success, ) = input.methods.delegatecall(msg.data);
        require(success,error);
    }

    function breedHounds(uint256 hound1, uint32[50] memory hound1GeneticSequence, uint256 hound2, uint32[50] memory hound2GeneticSequence) public returns(Hound.Struct memory) {
        (bool success, bytes memory hound) = control.methods.delegatecall(msg.data);
        require(success,error);
        return abi.decode(hound,(Hound.Struct));
    }

}
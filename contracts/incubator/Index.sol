// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../hounds/hound/Index.sol';
import './params/Constructor.sol';
import './methods/IIndex.sol';

contract Incubator is Ownable {
    
    IncubatorConstructor.Struct public control;

    constructor(IncubatorConstructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(IncubatorConstructor.Struct memory input) external onlyOwner {
        (bool success, ) = input.restricted.delegatecall(msg.data);
        require(success);
    }

    function breedHounds(uint256 hound1, uint32[54] memory hound1GeneticSequence, uint256 hound2, uint32[54] memory hound2GeneticSequence) public view returns(Hound.Struct memory) {
        return IIncubatorMinterMethods(control.minter).breedHounds(hound1, hound1GeneticSequence, hound2, hound2GeneticSequence);
    }

}
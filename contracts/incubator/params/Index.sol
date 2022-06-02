//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../../hounds/params/Hound.sol';
import './Constructor.sol';
import '../../genetics/interfaces/IMixGenes.sol';
import '../../randomness/IGetRandomNumber.sol';
import '../interfaces/IBreedHounds.sol';


contract Params is Ownable {
    IncubatorConstructor.Struct public control;

    constructor(IncubatorConstructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(IncubatorConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }
}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import '../zerocost/IIndex.sol';


contract Params is Ownable {
    
    RandomnessConstructor.Struct public control;

    constructor(RandomnessConstructor.Struct memory randomnessConstructor) {
        control = randomnessConstructor;
    }

    function setGlobalParameters(RandomnessConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

}
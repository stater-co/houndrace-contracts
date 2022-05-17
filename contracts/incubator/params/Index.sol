//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../../hounds/params/Hound.sol';
import './Constructor.sol';
import '../IIndex.sol';
import '../../genetics/IIndex.sol';
import '../../randomness/IIndex.sol';


contract Params is Ownable {
    IncubatorConstructor.Struct public control;

    constructor(IncubatorConstructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(IncubatorConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    fallback() external payable {}
    receive() external payable {}

}
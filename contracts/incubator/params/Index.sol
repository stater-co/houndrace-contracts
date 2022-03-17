// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './Constructor.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '../../hounds/hound/Index.sol';
import '../methods/IIndex.sol';
import '../../genetics/zerocost/IIndex.sol';
import '../../randomness/zerocost/IIndex.sol';

contract Params is Ownable {
    
    IncubatorConstructor.Struct public control;
    
	constructor(IncubatorConstructor.Struct memory input) {
		control = input;
	}

    function setGlobalParameters(IncubatorConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

}
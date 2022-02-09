// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import '@openzeppelin/contracts/access/Ownable.sol';
import '../../payments/Payments.sol';
import '../../hounds/IData.sol';

import './IData.sol';
import '../Constructor.sol';


/**
 * DIIMIIM:
 * This should not have any storage, except the constructor ones
 */
contract RaceGeneratorData is Ownable, Payments {

    event NewRace(Race.Struct queue, Race.Finished race);
    Constructor.Struct public control;
    string error = "Failed to delegatecall";

    constructor(
        Constructor.Struct memory input
    ) {
        control = input;
    }

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
        (bool success, bytes memory output) = input.methods.delegatecall(msg.data);
        require(success,error);
    }

    // Simulate the classic race seed
    function simulateClassicRace(Hound.Struct[] memory participants, uint256 terrain, uint256 theRandomness) public returns(bytes memory seed) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success,error);
        return output;
    }

    function generate(Race.Struct memory queue) external payable returns(Race.Finished memory) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success,error);
        return abi.decode(output,(Race.Finished));
    }

}

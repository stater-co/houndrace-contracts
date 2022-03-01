// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import '@openzeppelin/contracts/access/Ownable.sol';
import '../../utils/Sortings.sol';
import '../../utils/Converters.sol';
import '../../arenas/Arena.sol';
import '../../hounds/Hound.sol';
import '../../hounds/IData.sol';
import '../../arenas/IData.sol';
import '../../randomness/vanilla/IData.sol';
import '../../payments/PaymentRequest.sol';
import '../races/Race.sol';
import '../races/Queue.sol';
import './Constructor.sol';


/**
 * DIIMIIM:
 * This should not have any storage, except the constructor ones
 */
contract RaceGeneratorData is Ownable {

    event NewRace(Queue.Struct queue, Race.Struct race);
    Constructor.Struct public control;
    string error = "Failed to delegatecall";
    IHoundsData public houndsContract;

    constructor(
        Constructor.Struct memory input
    ) {
        control = input;
        houndsContract = IHoundsData(control.hounds);
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

    function generate(Race.Struct memory queue) external payable returns(Race.Struct memory) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success,error);
        return abi.decode(output,(Race.Struct));
    }

}

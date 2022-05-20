// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import '../interfaces/ISimulateClassicRace.sol';
import '../../queues/params/Queue.sol';
import '../../races/params/Race.sol';
import '../../hounds/interfaces/IHound.sol';
import '../../randomness/IGetRandomNumber.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/interfaces/IArena.sol';
import '../../utils/Converters.sol';
import '../../utils/Sortings.sol';


contract Params is Ownable {

    event NewRace(Queue.Struct queue, Race.Struct race);
    GeneratorConstructor.Struct public control;

    constructor(GeneratorConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(GeneratorConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    fallback() external payable {}
    receive() external payable {}

}
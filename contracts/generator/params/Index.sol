// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import '../../races/params/Queue.sol';
import '../../races/params/Race.sol';
import '../../hounds/minter/IIndex.sol';
import '../../hounds/modifier/IIndex.sol';
import '../../hounds/zerocost/IIndex.sol';
import '../../randomness/zerocost/IIndex.sol';
import '../../arenas/arena/Index.sol';
import '../../arenas/zerocost/IIndex.sol';
import '../../hounds/hound/Index.sol';
import '../../payments/methods/IIndex.sol';
import '../../utils/Converters.sol';
import '../../utils/Sortings.sol';
import '../zerocost/IIndex.sol';


contract Params is Ownable {

    event NewRace(Queue.Struct queue, Race.Struct race);
    GeneratorConstructor.Struct public control;

    constructor(
        GeneratorConstructor.Struct memory input
    ) {
        control = input;
    }

    function setGlobalParameters(
        GeneratorConstructor.Struct memory globalParameters
    ) external onlyOwner {
        control = globalParameters;
    }

}

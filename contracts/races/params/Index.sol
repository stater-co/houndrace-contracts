// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Race.sol';
import './Constructor.sol';
import '../../arenas/interfaces/IHandleArenaUsage.sol';
import '../../arenas/params/Arena.sol';
import '../../payments/params/Payment.sol';
import '../interfaces/IHandleRaceLoot.sol';
import '../../hounds/interfaces/IUpdateHoundRunning.sol';
import '../../hounds/interfaces/IUpdateHoundStamina.sol';
import '../../queues/params/Queue.sol';
import '../../payments/interfaces/IPay.sol';
import '../../whitelist/Index.sol';
import '../../queues/interfaces/IStaminaCostOf.sol';


contract Params is Whitelist {
    
    event NewRace(
        uint256 indexed id, 
        uint256 indexed queueId, 
        Race.Struct race
    );
    event NewFinishedRace(
        uint256 indexed id, 
        uint256 indexed queueId, 
        Race.Struct race
    );
    event UploadRace(
        uint256 indexed id, 
        uint256 indexed queueId, 
        Race.Struct race
    );

    uint256 public id = 1;
    RacesConstructor.Struct public control;
    mapping(uint256 => Race.Struct) public races;

    constructor(
        RacesConstructor.Struct memory input
    ) 
        Whitelist(input.operators, input.targets) 
    {
        control = input;
    }

    function setGlobalParameters(
        RacesConstructor.Struct memory globalParameters
    ) 
        external 
        onlyOwner 
    {
        control = globalParameters;
        updateWhitelist(globalParameters.operators, globalParameters.targets);
    }

    function race(uint256 theId) external view returns(Race.Struct memory) {
        return races[theId];
    }

    function participantsOf(uint256 theId) external view returns(uint256[] memory) {
        return races[theId].core.participants;
    }

}

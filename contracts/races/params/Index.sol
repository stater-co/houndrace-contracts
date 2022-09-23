// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Race.sol';
import './Constructor.sol';
import '../../utils/Converters.sol';
import '../../generator/interfaces/IGenerate.sol';
import '../../arenas/interfaces/IHandleArenaUsage.sol';
import '../../arenas/interfaces/IArena.sol';
import '../../arenas/interfaces/IArenaCurrency.sol';
import '../../arenas/params/Arena.sol';
import '../../payments/params/Payment.sol';
import '../interfaces/IHandleRaceLoot.sol';
import '../../hounds/interfaces/IUpdateHoundRunning.sol';
import './HoundStatistics.sol';
import '../../hounds/interfaces/IUpdateHoundStamina.sol';
import '../../utils/Withdrawable.sol';
import '../../queues/params/Queue.sol';
import '../../payments/interfaces/IPay.sol';
import '../../queues/interfaces/IStaminaCostOf.sol';
import '../../firewall/Index.sol';


contract Params is Withdrawable, Firewall {
    
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
    mapping(uint256 => HoundStatistics.Struct) public houndsStatistic;

    constructor(
        RacesConstructor.Struct memory input
    ) Firewall(input.firewall) {
        control = input;
    }

    function setGlobalParameters(
        RacesConstructor.Struct memory globalParameters
    ) 
        external 
        allowed(msg.sender,msg.sig) 
    {
        control = globalParameters;
    }

    function race(
        uint256 theId
    ) 
        external 
        view 
        returns(
            Race.Struct memory
        ) 
    {
        return races[theId];
    }

    function participantsOf(
        uint256 theId
    ) 
        external 
        view 
        returns(
            uint256[] memory
        ) 
    {
        return races[theId].core.participants;
    }

    function getStatistics(
        uint256 theId
    ) 
        external 
        view 
        returns(
            HoundStatistics.Struct memory
        ) 
    {
        return houndsStatistic[theId];
    }

}

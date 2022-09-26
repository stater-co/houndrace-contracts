// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Constructor.sol';
import '../interfaces/ISimulateClassicRace.sol';
import '../../queues/params/Queue.sol';
import '../../races/params/Race.sol';
import '../../hounds/interfaces/IHound.sol';
import '../../randomness/IGetRandomNumber.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/interfaces/IArena.sol';
import '../../arenas/interfaces/IArenaCurrency.sol';
import '../../utils/Converters.sol';
import '../../utils/Sortings.sol';
import '../../incubator/params/HoundIdentity.sol';
import '../../incubator/interfaces/IGetIdentity.sol';
import '../../gamification/params/HoundStamina.sol';
import '../../gamification/interfaces/IGetStamina.sol';
import '../../firewall/interfaces/IsAllowed.sol';
import '../../queues/params/Core.sol';


contract Params {

    GeneratorConstructor.Struct public control;

    constructor(
        GeneratorConstructor.Struct memory input
    ) {
        control = input;
    }

    function setGlobalParameters(
        GeneratorConstructor.Struct memory globalParameters
    ) 
        external 
    {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));
        control = globalParameters;
    }

}
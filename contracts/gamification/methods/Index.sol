//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract GamificationMethods is Params {

    constructor(
        GamificationConstructor.Struct memory input
    ) 
        Params(input) 
    {

    }

    function initializeHoundGamingStats(
        uint256 onId, 
        uint32[54] memory genetics
    ) 
        external 
    {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));
        houndsStamina[onId] = control.defaultStamina;
        houndsBreeding[onId] = control.defaultBreeding; 
    }

}
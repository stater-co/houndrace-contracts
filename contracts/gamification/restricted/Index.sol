//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract GamificationRestricted is Params {

    constructor(
        GamificationConstructor.Struct memory input
    ) 
        Params(input) 
    {

    }

    function setStamina(
        uint256 id, 
        HoundStamina.Struct memory stamina
    ) 
        external 
        allowed(msg.sender,msg.sig) 
    {
        houndsStamina[id] = stamina;
    }

    function setBreeding(
        uint256 id, 
        HoundBreeding.Struct memory breeding
    ) 
        external 
        allowed(msg.sender,msg.sig) 
    {
        houndsBreeding[id] = breeding;
    }

}
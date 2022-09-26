//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../firewall/interfaces/IsAllowed.sol';
import './Constructor.sol';
import './HoundBreeding.sol';
import './HoundStamina.sol';


contract Params {

    GamificationConstructor.Struct public control;
    mapping(uint256 => HoundStamina.Struct) public houndsStamina;
    mapping(uint256 => HoundBreeding.Struct) public houndsBreeding;

    constructor(
        GamificationConstructor.Struct memory input
    ) 
    {
        control = input;
    }

    function setGlobalParameters(
        GamificationConstructor.Struct memory globalParameters
    ) 
        external  
    {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));
        control = globalParameters;
    }

    function getStamina(
        uint256 id
    ) 
        external 
        view 
        returns(HoundStamina.Struct memory) 
    {
        return houndsStamina[id];
    }

    function getBreeding(
        uint256 id
    ) 
        external 
        view 
        returns(HoundBreeding.Struct memory) 
    {
        return houndsBreeding[id];
    }

    function getStaminaBreeding(
        uint256 id
    ) 
        external 
        view 
        returns(HoundStamina.Struct memory, HoundBreeding.Struct memory) 
    {
        return (houndsStamina[id],houndsBreeding[id]);
    }

}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import './HoundBreeding.sol';
import './HoundStamina.sol';


contract Params is Ownable, Firewall {

    GamificationConstructor.Struct public control;
    mapping(uint256 => HoundStamina.Struct) public houndsStamina;
    mapping(uint256 => HoundBreeding.Struct) public houndsBreeding;

    constructor(
        GamificationConstructor.Struct memory input
    ) 
        Firewall(input.firewall) 
    {
        control = input;
    }

    function setGlobalParameters(
        GamificationConstructor.Struct memory globalParameters
    ) 
        external 
        onlyOwner 
    {
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
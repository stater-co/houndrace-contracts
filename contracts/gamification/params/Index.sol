//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import './HoundBreeding.sol';
import './HoundStamina.sol';


contract Params is Ownable {

    Constructor.Struct public control;
    mapping (address => bool) public allowed;
    mapping(uint256 => HoundStamina.Struct) public houndsStamina;
    mapping(uint256 => HoundBreeding.Struct) public houndsBreeding;

    constructor(Constructor.Struct memory input) {
        control = input;
        handleAllowedCallers(input.allowed);
    }

    function handleAllowedCallers(address[] memory allowedCallers) internal {
        for ( uint256 i = 0 ; i < allowedCallers.length ; ++i )
            allowed[allowedCallers[i]] = !allowed[allowedCallers[i]];
    }

    function getStamina(uint256 id) external view returns(HoundStamina.Struct memory){
        return houndsStamina[id];
    }

    function getBreeding(uint256 id) external view returns(HoundBreeding.Struct memory){
        return houndsBreeding[id];
    }

    function getStaminaBreeding(uint256 id) external view returns(HoundStamina.Struct memory, HoundBreeding.Struct memory) {
        return (houndsStamina[id],houndsBreeding[id]);
    }

}
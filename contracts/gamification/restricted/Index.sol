//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract GamificationRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function initializeHoundGamingStats(uint256 id) external {
        require(allowed[msg.sender]);
        houndsStamina[id] = control.defaultStamina;
        houndsBreeding[id] = control.defaultBreeding;
    }

    function setStamina(uint256 id, HoundStamina.Struct memory stamina) external {
        require(allowed[msg.sender]);
        houndsStamina[id] = stamina;
    }

    function setBreeding(uint256 id, HoundBreeding.Struct memory breeding) external {
        require(allowed[msg.sender]);
        houndsBreeding[id] = breeding;
    }

}
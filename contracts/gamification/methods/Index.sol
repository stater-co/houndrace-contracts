//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract GamificationMethods is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function initializeHoundGamingStats(uint256 onId, uint32[54] memory genetics) external {
        require(allowed[msg.sender]);

        houndsStamina[onId] = control.defaultStamina;
        houndsStamina[onId].staminaLastUpdate = block.timestamp;
        houndsBreeding[onId] = control.defaultBreeding;
    }

}
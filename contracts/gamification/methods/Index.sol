//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract GamificationMethods is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function min(uint256 a, uint256 b) internal pure returns(uint256) {
        return a > b ? b : a;
    }

    function initializeHoundGamingStats(uint256 onId, uint32[54] memory genetics) external {
        require(allowed[msg.sender]);
        houndsStamina[onId] = control.defaultStamina;
        houndsBreeding[onId] = control.defaultBreeding; 
    }

}
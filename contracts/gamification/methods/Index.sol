//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract GamificationMethods is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function min(uint256 a, uint256 b) internal pure returns(uint256) {
        return a > b ? b : a;
    }

    function initializeHoundGamingStats(uint256 onId, uint32[54] memory genetics) external {
        console.log("Allowed x1: ", allowed[msg.sender]);
        console.log(msg.sender);
        require(allowed[msg.sender]);
        houndsStamina[onId] = HoundStamina.Struct(
            0, // staminaLastUpdate
            genetics[53] > 3 ? 
                control.defaultStamina.staminaRefill1x - ( control.defaultStamina.staminaRefill1x / 100 * genetics[53] ) 
            : 
                control.defaultStamina.staminaRefill1x + ( control.defaultStamina.staminaRefill1x / 100 * genetics[53] ), // staminaRefill1x
            genetics[52] > 6 ? 
                control.defaultStamina.staminaValue + genetics[52] - 6 
            : 
                control.defaultStamina.staminaValue - genetics[52], // staminaValue
            genetics[51] == 9 ? 2 : control.defaultStamina.staminaPerHour, // staminaPerHour
            genetics[50] > 6 ? 
                control.defaultStamina.staminaCap + ( ( genetics[50] - 6 ) * 5 ) 
            : 
                control.defaultStamina.staminaCap - genetics[50] // staminaCap
        );

        houndsBreeding[onId] = HoundBreeding.Struct(
            0, // lastBreed
            genetics[1] == 1 ? 
                control.defaultBreeding.breedingCooldown - (
                    genetics[50] < 3 ? 
                        ( control.defaultBreeding.breedingCooldown / 100 ) * ( ( genetics[50] + 1 ) * 8 )
                    : 
                        0
                )
            : 
                control.defaultBreeding.breedingCooldown + (
                    genetics[50] < 3 ? 
                        ( control.defaultBreeding.breedingCooldown / 100 ) * ( ( genetics[50] + 1 ) * 8 )
                    : 
                        0
                ), // breedingCooldown
            genetics[53] < 3 ? 
                control.defaultBreeding.breedingFee - ( control.defaultBreeding.breedingFee / 100 * genetics[53] ) 
            : 
                control.defaultBreeding.breedingFee + ( control.defaultBreeding.breedingFee / 100 * genetics[53] ), // staminaRefill1x,
            false // availableToBreed
        );
    }

}
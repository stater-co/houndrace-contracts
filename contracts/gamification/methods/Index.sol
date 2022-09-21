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
        houndsStamina[onId] = HoundStamina.Struct(
            control.defaultStamina.staminaRefillCurrency, // staminaRefillCurrency
            0, // staminaLastUpdate
            genetics[53] > 3 ? 
                control.defaultStamina.staminaRefill1x - ( control.defaultStamina.staminaRefill1x / 100 * genetics[53] ) 
            : 
                control.defaultStamina.staminaRefill1x + ( control.defaultStamina.staminaRefill1x / 100 * genetics[53] ), // staminaRefill1x
            genetics[50] >= 1 && genetics[50] <= 4 ? 
                    control.defaultStamina.refillStaminaCooldownCost - ( ( control.defaultStamina.refillStaminaCooldownCost / 100 ) * genetics[50] ) 
                :
                    control.defaultStamina.refillStaminaCooldownCost + ( ( control.defaultStamina.refillStaminaCooldownCost / 150 ) * genetics[50] ), // refillStaminaCooldownCost
            genetics[52] > 6 ? 
                control.defaultStamina.staminaValue + genetics[52] - 6 
            : 
                control.defaultStamina.staminaValue - genetics[52], // staminaValue
            genetics[51] == 9 ? control.defaultStamina.staminaPerTimeUnit / 2 : control.defaultStamina.staminaPerTimeUnit, // staminaPerHour
            genetics[50] > 6 ? 
                control.defaultStamina.staminaCap + ( ( genetics[50] - 6 ) * 5 ) 
            : 
                control.defaultStamina.staminaCap - genetics[50] // staminaCap
        );

        houndsBreeding[onId] = HoundBreeding.Struct(
            control.defaultBreeding.breedingFeeCurrency,
            control.defaultBreeding.breedingCooldownCurrency,
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
            0, // breedingFee,
            genetics[51] == 1 ? control.defaultBreeding.breedingCooldownTimeUnit / 2 : control.defaultBreeding.breedingCooldownTimeUnit, // breedingCooldownTimeUnit
            genetics[52] > 7 && genetics[52] <= 9 ? 
                control.defaultBreeding.refillBreedingCooldownCost - ( ( control.defaultBreeding.refillBreedingCooldownCost / 100 ) * genetics[52] )
            : 
                control.defaultBreeding.refillBreedingCooldownCost + ( ( control.defaultBreeding.refillBreedingCooldownCost / 150 ) * genetics[52] ), // refillBreedingCooldownCost
            false // availableToBreed
        );
    }

}
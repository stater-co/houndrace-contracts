//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function updateHoundStamina(uint256 theId) external {
        require(theId < id);
        require(allowed[msg.sender]);
        --hounds[theId].stamina.staminaValue;
        hounds[theId].stamina.staminaValue += uint32( ( ( block.timestamp - hounds[theId].stamina.staminaLastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.staminaLastUpdate = block.timestamp;
        if ( hounds[theId].stamina.staminaValue > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.staminaValue = hounds[theId].stamina.staminaCap;
        }
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.staminaValue);
    }

    function updateHoundRunning(uint256 theId, uint256 queueId) external returns(uint256 oldQueueId) {
        require(theId < id);
        require(allowed[msg.sender]);
        oldQueueId = hounds[theId].queueId;
        hounds[theId].queueId = queueId;
        emit HoundQueueStatusUpdate(theId, queueId);
    }

    function boostHoundStamina(uint256 theId, address user) external payable {
        require(theId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillStaminaCooldownCost = control.fees.refillStaminaCooldownCost - ((control.fees.refillStaminaCooldownCost / 100) * discount);
        hounds[theId].stamina.staminaValue += uint32(msg.value / refillStaminaCooldownCost);
        hounds[theId].stamina.staminaValue += uint32( ( ( block.timestamp - hounds[theId].stamina.staminaLastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.staminaLastUpdate = block.timestamp;
        if ( hounds[theId].stamina.staminaValue > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.staminaValue = hounds[theId].stamina.staminaCap;
        }
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.staminaValue);
    }

    function boostHoundBreeding(uint256 theId, address user) external payable {
        require(theId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillBreedingCooldownCost = control.fees.refillBreedingCooldownCost - ((control.fees.refillBreedingCooldownCost / 100) * discount);
        hounds[theId].breeding.lastBreed -= msg.value / refillBreedingCooldownCost;
        emit HoundBreedingStatusUpdate(theId,hounds[theId].breeding.lastBreed + hounds[theId].breeding.breedingCooldown < block.timestamp);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        require(theId < id);
        require(ownerOf(theId) == msg.sender);
        hounds[theId].breeding.breedingFee = fee;
        hounds[theId].breeding.availableToBreed = status;
        emit HoundBreedable(theId,fee);
    }

}
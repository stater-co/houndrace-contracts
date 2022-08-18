//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
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

    function boostHoundStamina(uint256 theId, address user, uint256 payed) external payable {
        require(theId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillStaminaCooldownCost = control.fees.refillStaminaCooldownCost - ((control.fees.refillStaminaCooldownCost / 100) * discount);
        HoundStamina.Struct memory stamina = hounds[theId].stamina;

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = control.fees.currency == address(0) ? msg.value : payed;
        IPay(control.boilerplate.payments).pay{
            value: control.fees.currency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.fees.currency,
            new uint256[](0),
            amounts,
            control.fees.currency == address(0) ? 3 : 2
        );

        hounds[theId].stamina.staminaValue += uint32(amounts[0] / refillStaminaCooldownCost);
        hounds[theId].stamina.staminaValue += uint32( ( ( block.timestamp - stamina.staminaLastUpdate ) / 3600 ) * stamina.staminaPerHour );
        hounds[theId].stamina.staminaLastUpdate = block.timestamp;
        if ( hounds[theId].stamina.staminaValue > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.staminaValue = hounds[theId].stamina.staminaCap;
        }
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.staminaValue);
    }

    function boostHoundBreeding(uint256 theId, address user, uint256 payed) external payable {
        require(theId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillBreedingCooldownCost = control.fees.refillBreedingCooldownCost - ((control.fees.refillBreedingCooldownCost / 100) * discount);
        Hound.Breeding memory breeding = hounds[theId].breeding;

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = control.fees.currency == address(0) ? msg.value : payed;
        IPay(control.boilerplate.payments).pay{
            value: control.fees.currency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.fees.currency,
            new uint256[](0),
            amounts,
            control.fees.currency == address(0) ? 3 : 2
        );

        hounds[theId].breeding.lastBreed -= amounts[0] / refillBreedingCooldownCost;
        emit HoundBreedingStatusUpdate(theId,hounds[theId].breeding.lastBreed + breeding.breedingCooldown < block.timestamp);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        require(theId < id);
        require(ownerOf(theId) == msg.sender);
        hounds[theId].breeding.breedingFee = fee;
        hounds[theId].breeding.availableToBreed = status;
        emit HoundBreedable(theId,fee);
    }

}
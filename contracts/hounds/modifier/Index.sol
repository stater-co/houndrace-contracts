//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function updateHoundStamina(uint256 theId) public {
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

    function updateHoundRunning(uint256 theId, uint256 queueId) public returns(uint256) {
        require(theId < id);
        require(allowed[msg.sender]);
        uint256 oldQueueId = hounds[theId].queueId;
        hounds[theId].queueId = queueId;
        return oldQueueId;
    }

    function boostHoundStamina(uint256 theId, address user) public payable {
        require(theId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillStaminaCooldownCost = control.fees.refillStaminaCooldownCost - ((control.fees.refillStaminaCooldownCost / 100) * discount);
        hounds[theId].stamina.staminaValue += uint32(msg.value / refillStaminaCooldownCost);
        hounds[theId].stamina.staminaValue += uint32( ( ( block.timestamp - hounds[theId].stamina.staminaLastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.staminaLastUpdate = block.timestamp;
        if ( hounds[theId].stamina.staminaValue > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.staminaValue = hounds[theId].stamina.staminaCap;
        }
        ITransferTokens(control.boilerplate.payments).transferTokens{
            value: control.fees.refillStaminaCostCurrency == address(0) ? refillStaminaCooldownCost : 0
        }(
            control.fees.refillStaminaCostCurrency,
            msg.sender,
            control.boilerplate.payments,
            refillStaminaCooldownCost
        );
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.staminaValue);
    }

    function updateHoundBreeding(uint256 theId) public {
        require(theId < id);
        require(allowed[msg.sender]);
        hounds[theId].breeding.breedCooldown += 172800;
        hounds[theId].breeding.breedLastUpdate = block.timestamp;
        emit HoundBreedingStatusUpdate(theId,hounds[theId].breeding.availableToBreed);
    }

    function boostHoundBreeding(uint256 theId, address user) public payable {
        require(theId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillBreedingCooldownCost = control.fees.refillBreedingCooldownCost - ((control.fees.refillBreedingCooldownCost / 100) * discount);
        hounds[theId].breeding.breedCooldown -= msg.value / refillBreedingCooldownCost;
        hounds[theId].breeding.breedLastUpdate = block.timestamp;

        ITransferTokens(control.boilerplate.payments).transferTokens{
            value: control.fees.refillBreedingCostCurrency == address(0) ? refillBreedingCooldownCost : 0
        }(
            control.fees.refillBreedingCostCurrency,
            msg.sender,
            control.boilerplate.payments,
            refillBreedingCooldownCost
        );
        emit HoundBreedingStatusUpdate(theId,hounds[theId].breeding.availableToBreed);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        require(theId < id);
        require(ownerOf(theId) == msg.sender);
        if ( status )
            require(hounds[theId].breeding.breedCooldown < block.timestamp);
        hounds[theId].breeding.breedingFee = fee;
        hounds[theId].breeding.availableToBreed = status;
        emit HoundBreedable(theId,fee);
    }

}
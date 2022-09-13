//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function updateHoundStamina(uint256 theId) external {
        require(allowed[msg.sender]);

        HoundStamina.Struct memory stamina = IGetStamina(control.boilerplate.gamification).getStamina(theId);

        --stamina.staminaValue;

        stamina.staminaValue += uint32( ( ( block.timestamp - stamina.staminaLastUpdate ) / 3600 ) * stamina.staminaPerTimeUnit );
        stamina.staminaLastUpdate = block.timestamp;

        if ( stamina.staminaValue > stamina.staminaCap ) {
            stamina.staminaValue = stamina.staminaCap;
        }

        ISetStamina(control.boilerplate.gamification).setStamina(theId, stamina);

        emit HoundStaminaUpdate(theId, stamina.staminaValue);
    }

    function updateHoundRunning(uint256 theId, uint256 queueId) external returns(uint256 oldQueueId) {
        require(allowed[msg.sender]);
        oldQueueId = hounds[theId].queueId;
        hounds[theId].queueId = queueId;
        emit HoundQueueStatusUpdate(theId, queueId);
    }

    function boostHoundStamina(uint256 theId, address user, uint256 payed) external payable {
        require(theId < id);
        
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillStaminaCooldownCost = control.fees.refillStaminaCooldownCost - ((control.fees.refillStaminaCooldownCost / 100) * discount);
        HoundStamina.Struct memory stamina = IGetStamina(control.boilerplate.gamification).getStamina(theId);

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
            control.fees.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        stamina.staminaValue += uint32(amounts[0] / refillStaminaCooldownCost);
        stamina.staminaValue += uint32( ( ( block.timestamp - stamina.staminaLastUpdate ) / 3600 ) * stamina.staminaPerTimeUnit );
        stamina.staminaLastUpdate = block.timestamp;
        if ( stamina.staminaValue > stamina.staminaCap ) {
            stamina.staminaValue = stamina.staminaCap;
        }

        ISetStamina(control.boilerplate.gamification).setStamina(theId, stamina);
        emit HoundStaminaUpdate(theId, stamina.staminaValue);
    }

    function boostHoundBreeding(uint256 theId, address user, uint256 payed) external payable {
        require(theId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillBreedingCooldownCost = control.fees.refillBreedingCooldownCost - ((control.fees.refillBreedingCooldownCost / 100) * discount);
        HoundBreeding.Struct memory breeding = IGetBreeding(control.boilerplate.gamification).getBreeding(theId);

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
            control.fees.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        breeding.lastBreed -= amounts[0] / refillBreedingCooldownCost;

        ISetBreeding(control.boilerplate.gamification).setBreeding(id, breeding);
        emit HoundBreedingStatusUpdate(theId, breeding.lastBreed + breeding.breedingCooldown < block.timestamp);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        require(ownerOf(theId) == msg.sender);
        
        HoundBreeding.Struct memory breeding = IGetBreeding(control.boilerplate.gamification).getBreeding(theId);

        breeding.breedingFee = fee;
        breeding.availableToBreed = status;

        ISetBreeding(control.boilerplate.gamification).setBreeding(id, breeding);

        emit HoundBreedable(theId,fee);
    }

}
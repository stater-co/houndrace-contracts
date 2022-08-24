//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function updateHoundStamina(uint256 theId) external {
        console.log("ok 1");
        require(allowed[msg.sender]);
        console.log("ok 2", theId, id);
        HoundStamina.Struct memory stamina = IGetStamina(control.boilerplate.gamification).getStamina(theId);
        console.log("ok 3 ", stamina.staminaValue);
        --stamina.staminaValue;
        console.log("ok 4");
        stamina.staminaValue += uint32( ( ( block.timestamp - stamina.staminaLastUpdate ) / 3600 ) * stamina.staminaPerHour );
        stamina.staminaLastUpdate = block.timestamp;
        console.log("ok 5");
        if ( stamina.staminaValue > stamina.staminaCap ) {
            stamina.staminaValue = stamina.staminaCap;
        }
        console.log("ok 6");
        ISetStamina(control.boilerplate.gamification).setStamina(theId, stamina);
        console.log("ok 7");
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
            control.fees.currency == address(0) ? 3 : 2
        );

        stamina.staminaValue += uint32(amounts[0] / refillStaminaCooldownCost);
        stamina.staminaValue += uint32( ( ( block.timestamp - stamina.staminaLastUpdate ) / 3600 ) * stamina.staminaPerHour );
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
            control.fees.currency == address(0) ? 3 : 2
        );

        breeding.lastBreed -= amounts[0] / refillBreedingCooldownCost;

        ISetBreeding(control.boilerplate.gamification).setBreeding(id, breeding);
        emit HoundBreedingStatusUpdate(theId, breeding.lastBreed + breeding.breedingCooldown < block.timestamp);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        console.log("put hound for breed 2");
        require(ownerOf(theId) == msg.sender);
        
        console.log("put hound for breed 3");
        HoundBreeding.Struct memory breeding = IGetBreeding(control.boilerplate.gamification).getBreeding(theId);

        console.log("put hound for breed 4 >> ", theId, fee, status);
        breeding.breedingFee = fee;
        breeding.availableToBreed = status;

        console.log("put hound for breed 5 ", control.boilerplate.gamification);
        ISetBreeding(control.boilerplate.gamification).setBreeding(id, breeding);

        console.log("put hound for breed 6: ", breeding.breedingFee, breeding.availableToBreed);
        emit HoundBreedable(theId,fee);
    }

}
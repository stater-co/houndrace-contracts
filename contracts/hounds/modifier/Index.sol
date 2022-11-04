//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function updateHoundStamina(
        uint256 theId,
        uint32 amount
    ) external whitelisted {

        hounds[theId].stamina.staminaValue -= amount;
        refreshStamina(theId, hounds[theId].stamina);
    }

    function updateHoundRunning(
        uint256 theId, 
        uint256 runningOn
    ) external whitelisted returns(uint256 ranOn) {

        ranOn = hounds[theId].profile.runningOn;
        hounds[theId].profile.runningOn = runningOn;
        
        emit HoundQueueStatusUpdate(theId, runningOn);
    }

    function boostHoundStamina(
        uint256 theId, 
        address user, 
        uint256 payed
    ) 
        external 
        payable 
        nonReentrant 
    {
        require(theId < id);
        uint256 discount = ICheckDiscount(control.boilerplate.shop).checkDiscount(user);

        Hound.Stamina memory stamina = hounds[theId].stamina;
        require(stamina.staminaValue < stamina.staminaCap);
        uint256 staminaRefill1x = stamina.staminaRefill1x - ((stamina.staminaRefill1x / 100) * discount);

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = stamina.staminaRefillCurrency == address(0) ? msg.value : payed;
        IPay(control.boilerplate.payments).pay{
            value: stamina.staminaRefillCurrency == address(0) ? msg.value : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            stamina.staminaRefillCurrency,
            new uint256[](0),
            amounts,
            stamina.staminaRefillCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        
        hounds[theId].stamina.staminaValue += uint32(amounts[0] / staminaRefill1x);
        refreshStamina(theId, hounds[theId].stamina);
    }

    function boostHoundBreeding(
        uint256 theId, 
        address user, 
        uint256 payed
    ) 
        external 
        payable 
        nonReentrant 
    {
        require(theId < id);
        uint256 discount = ICheckDiscount(control.boilerplate.shop).checkDiscount(user);

        Hound.Breeding memory breeding = hounds[theId].breeding;
        require(breeding.lastBreed > 0);
        uint256 refillBreedingCooldownCost = breeding.refillBreedingCooldownCost - ((breeding.refillBreedingCooldownCost / 100) * discount);

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = breeding.breedingCooldownCurrency == address(0) ? msg.value : payed;
        
        IPay(control.boilerplate.payments).pay{
            value: breeding.breedingCooldownCurrency == address(0) ? msg.value : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            breeding.breedingCooldownCurrency,
            new uint256[](0),
            amounts,
            breeding.breedingCooldownCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        hounds[theId].breeding.lastBreed -= amounts[0] / refillBreedingCooldownCost;

        emit HoundBreedingStatusUpdate(theId, breeding.lastBreed + breeding.breedingCooldown < block.timestamp);
    }

    function putHoundForBreed(
        uint256 theId, 
        uint256 fee, 
        bool status
    ) external {
        require(ownerOf(theId) == msg.sender);

        hounds[theId].breeding.breedingFee = status ? fee : 0;
        hounds[theId].breeding.availableToBreed = status;

        emit HoundBreedable(
            theId,
            fee,
            status
        );
    }

    function refreshStamina(
        uint256 theId, 
        Hound.Stamina memory stamina
    ) internal {
        stamina.staminaValue += uint32( ( block.timestamp - stamina.staminaLastUpdate ) / stamina.staminaPerTimeUnit );
        stamina.staminaLastUpdate = block.timestamp;
        if ( stamina.staminaValue > stamina.staminaCap ) {
            stamina.staminaValue = stamina.staminaCap;
        }

        emit HoundStaminaUpdate(
            theId, 
            stamina.staminaValue
        );
    }

}
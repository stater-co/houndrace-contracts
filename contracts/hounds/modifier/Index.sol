//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(
        HoundsConstructor.Struct memory input
    ) 
        Params(input) 
    {
        
    }
    
    function updateHoundStamina(
        uint256 theId,
        uint32 amount
    ) external {
        require(IsAllowed(control.boilerplate.firewall).isAllowed(msg.sender,msg.sig));

        HoundStamina.Struct memory stamina = IGetStamina(control.boilerplate.gamification).getStamina(theId);

        stamina.staminaValue -= amount;
        refreshStamina(theId, stamina);
    }

    function updateHoundRunning(
        uint256 theId, 
        uint256 queueId
    ) external returns(uint256 oldQueueId) {
        require(IsAllowed(control.boilerplate.firewall).isAllowed(msg.sender,msg.sig));

        oldQueueId = hounds[theId].queueId;
        hounds[theId].queueId = queueId;
        
        emit HoundQueueStatusUpdate(theId, queueId);
    }

    function boostHoundStamina(
        uint256 theId, 
        address user, 
        uint256 payed
    ) external payable {
        require(theId < id);
        
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);

        HoundStamina.Struct memory stamina = IGetStamina(control.boilerplate.gamification).getStamina(theId);
        require(stamina.staminaValue < stamina.staminaCap);
        uint256 staminaRefill1x = stamina.staminaRefill1x - ((stamina.staminaRefill1x / 100) * discount);
        
        require(
                ( stamina.staminaRefillCurrency == address(0) && payed == 0 && msg.value > 0 ) 
            || 
                ( stamina.staminaRefillCurrency != address(0) && payed > 0 && msg.value == 0 )
        );
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

        
        stamina.staminaValue += uint32(amounts[0] / staminaRefill1x);
        refreshStamina(theId, stamina);
    }

    function boostHoundBreeding(
        uint256 theId, 
        address user, 
        uint256 payed
    ) external payable {
        require(theId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);

        HoundBreeding.Struct memory breeding = IGetBreeding(control.boilerplate.gamification).getBreeding(theId);
        require(breeding.lastBreed > 0);
        uint256 refillBreedingCooldownCost = breeding.refillBreedingCooldownCost - ((breeding.refillBreedingCooldownCost / 100) * discount);
        
        require(
                ( breeding.breedingCooldownCurrency == address(0) && payed == 0 && msg.value > 0 ) 
            || 
                ( breeding.breedingCooldownCurrency != address(0) && payed > 0 && msg.value == 0 )
        );

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

        breeding.lastBreed -= amounts[0] / refillBreedingCooldownCost;

        ISetBreeding(control.boilerplate.gamification).setBreeding(theId, breeding);
        emit HoundBreedingStatusUpdate(theId, breeding.lastBreed + breeding.breedingCooldown < block.timestamp);
    }

    function putHoundForBreed(
        uint256 theId, 
        uint256 fee, 
        bool status
    ) external {
        require(ownerOf(theId) == msg.sender);
        
        HoundBreeding.Struct memory breeding = IGetBreeding(control.boilerplate.gamification).getBreeding(theId);

        breeding.breedingFee = fee;
        breeding.availableToBreed = status;

        ISetBreeding(control.boilerplate.gamification).setBreeding(theId, breeding);

        emit HoundBreedable(
            theId,
            fee,
            status
        );
    }

    function refreshStamina(
        uint256 theId, 
        HoundStamina.Struct memory stamina
    ) internal {
        stamina.staminaValue += uint32( ( block.timestamp - stamina.staminaLastUpdate ) / stamina.staminaPerTimeUnit );
        stamina.staminaLastUpdate = block.timestamp;
        if ( stamina.staminaValue > stamina.staminaCap ) {
            stamina.staminaValue = stamina.staminaCap;
        }

        ISetStamina(control.boilerplate.gamification).setStamina(theId, stamina);

        emit HoundStaminaUpdate(
            theId, 
            stamina.staminaValue
        );
    }

}
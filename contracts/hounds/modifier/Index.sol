//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function updateHoundStamina(uint256 theId) public {
        require(allowed[msg.sender]);

        --hounds[theId].stamina.stamina;
        
        hounds[theId].stamina.stamina += uint32( ( ( block.timestamp - hounds[theId].stamina.lastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.lastUpdate = block.timestamp;

        if ( hounds[theId].stamina.stamina > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.stamina = hounds[theId].stamina.staminaCap;
        }

        emit HoundStaminaUpdate(theId,hounds[theId].stamina.stamina);
    }

    function boostHoundStamina(uint256 theId, address user) public payable {
        uint256 discount = IShopMethods(control.boilerplate.shopMethods).calculateDiscount(user);
        uint256 refillStaminaCooldownCost = control.fees.refillStaminaCooldownCost - ((control.fees.refillStaminaCooldownCost / 100) * discount);
        hounds[theId].stamina.stamina += uint32(msg.value / refillStaminaCooldownCost);
        
        hounds[theId].stamina.stamina += uint32( ( ( block.timestamp - hounds[theId].stamina.lastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.lastUpdate = block.timestamp;

        if ( hounds[theId].stamina.stamina > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.stamina = hounds[theId].stamina.staminaCap;
        }

        emit HoundStaminaUpdate(theId,hounds[theId].stamina.stamina);
    }

    function updateHoundBreeding(uint256 theId) public {
        require(allowed[msg.sender]);
        
        hounds[theId].breeding.breedCooldown += 172800;
        hounds[theId].breeding.lastUpdate = block.timestamp;
    
        emit HoundBreedingStatusUpdate(theId,hounds[theId].breeding.availableToBreed);
    }

    function boostHoundBreeding(uint256 theId, address user) public payable {

        uint256 discount = IShopMethods(control.boilerplate.shopMethods).calculateDiscount(user);
        uint256 refillBreedingCooldownCost = control.fees.refillBreedingCooldownCost - ((control.fees.refillBreedingCooldownCost / 100) * discount);
        
        hounds[theId].breeding.breedCooldown -= msg.value / refillBreedingCooldownCost;
        hounds[theId].breeding.lastUpdate = block.timestamp;
        
        emit HoundBreedingStatusUpdate(theId,hounds[theId].breeding.availableToBreed);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        require(ownerOf(theId) == msg.sender);
        if ( status )
            require(hounds[theId].breeding.breedCooldown < block.timestamp);
        hounds[theId].breeding.breedingFee = fee;
        hounds[theId].breeding.availableToBreed = status;
        emit HoundBreedable(theId,fee);
    }

}
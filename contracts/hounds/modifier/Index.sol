//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor() ERC721("","") {}
    
    function boostStamina(uint256 theId) public payable {
        uint256 discount = IShopMethods(control.boilerplate.shop).calculateDiscount(msg.sender);
        uint256 refill1xStaminaCooldownCost = control.fees.refillStaminaCooldownCost - ((control.fees.refillStaminaCooldownCost / 100) * discount);

        hounds[theId].stamina.stamina += uint32( ( ( block.timestamp - hounds[theId].stamina.lastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.lastUpdate = block.timestamp;

        if (msg.value >= refill1xStaminaCooldownCost) {
            hounds[theId].stamina.stamina += uint32(msg.value / refill1xStaminaCooldownCost);
            IHoundracePotions(control.boilerplate.ogars).burn(ownerOf(theId), msg.value);
        }

        if ( hounds[theId].stamina.stamina >= hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.stamina = hounds[theId].stamina.staminaCap;
        }
        
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.stamina);
    }

    function updateStamina(uint256 theId) public {
        require(allowed[msg.sender]);
        --hounds[theId].stamina.stamina;

        hounds[theId].stamina.stamina += uint32( ( ( block.timestamp - hounds[theId].stamina.lastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.lastUpdate = block.timestamp;
        if ( hounds[theId].stamina.stamina > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.stamina = hounds[theId].stamina.staminaCap;
        }
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.stamina);
    }

    function boostBreedingCooldown(uint256 theId) public payable {
        uint256 discount = IShopMethods(control.boilerplate.shop).calculateDiscount(msg.sender);
        uint256 refill1sBreedingCooldownCost = control.fees.refillBreedingCooldownCost - ((control.fees.refillBreedingCooldownCost / 100) * discount);
        if ( msg.value >= refill1sBreedingCooldownCost ) {
            hounds[theId].breeding.lastUpdate -= msg.value / refill1sBreedingCooldownCost;
            IHoundracePotions(control.boilerplate.ogars).burn(ownerOf(theId), msg.value);
        }
        if ( ( block.timestamp - hounds[theId].breeding.lastUpdate ) / 3600 >= hounds[theId].breeding.breedCooldown ) {
            hounds[theId].breeding.availableToBreed = true;
            hounds[theId].breeding.lastUpdate = block.timestamp;
        }
        emit HoundBreedingStatusUpdate(theId,hounds[theId].breeding.availableToBreed);
    }

    function updateHoundBreeding(uint256 theId) public {
        require(allowed[msg.sender]);
        hounds[theId].breeding.availableToBreed = false;
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
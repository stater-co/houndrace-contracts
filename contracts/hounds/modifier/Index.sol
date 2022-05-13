//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function updateHoundStamina(uint256 theId) public {
        require(allowed[msg.sender]);
        --hounds[theId].stamina.staminaValue;
        hounds[theId].stamina.staminaValue += uint32( ( ( block.timestamp - hounds[theId].stamina.staminaLastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.staminaLastUpdate = block.timestamp;
        if ( hounds[theId].stamina.staminaValue > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.staminaValue = hounds[theId].stamina.staminaCap;
        }
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.staminaValue);
    }

    function updateHoundRunning(uint256 theId, bool running) public returns(bool) {
        require(allowed[msg.sender]);
        bool oldRunning = hounds[theId].running;
        hounds[theId].running = running;
        return oldRunning;
    }

    function boostHoundStamina(uint256 theId, address user) public payable {
        uint256 discount = IShop(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillStaminaCooldownCost = control.fees.refillStaminaCooldownCost - ((control.fees.refillStaminaCooldownCost / 100) * discount);
        hounds[theId].stamina.staminaValue += uint32(msg.value / refillStaminaCooldownCost);
        hounds[theId].stamina.staminaValue += uint32( ( ( block.timestamp - hounds[theId].stamina.staminaLastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.staminaLastUpdate = block.timestamp;
        if ( hounds[theId].stamina.staminaValue > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.staminaValue = hounds[theId].stamina.staminaCap;
        }
        IPayments(control.boilerplate.payments).transferTokens{
            value: control.fees.refillStaminaCostCurrency == address(0) ? refillStaminaCooldownCost : 0
        }(
            Payment.Struct(
                msg.sender,
                payable(control.boilerplate.payments),
                control.fees.refillStaminaCostCurrency,
                new uint256[](0),
                refillStaminaCooldownCost,
                4,
                1,
                1
            )
        );
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.staminaValue);
    }

    function updateHoundBreeding(uint256 theId) public {
        require(allowed[msg.sender]);
        hounds[theId].breeding.breedCooldown += 172800;
        hounds[theId].breeding.breedLastUpdate = block.timestamp;
        emit HoundBreedingStatusUpdate(theId,hounds[theId].breeding.availableToBreed);
    }

    function boostHoundBreeding(uint256 theId, address user) public payable {
        uint256 discount = IShop(control.boilerplate.shop).calculateDiscount(user);
        uint256 refillBreedingCooldownCost = control.fees.refillBreedingCooldownCost - ((control.fees.refillBreedingCooldownCost / 100) * discount);
        hounds[theId].breeding.breedCooldown -= msg.value / refillBreedingCooldownCost;
        hounds[theId].breeding.breedLastUpdate = block.timestamp;

        IPayments(control.boilerplate.payments).transferTokens{
            value: control.fees.refillBreedingCostCurrency == address(0) ? refillBreedingCooldownCost : 0
        }(
            Payment.Struct(
                msg.sender,
                payable(control.boilerplate.payments),
                refillBreedingCooldownCost,
                new uint256[](0),
                refillBreedingCostCurrency,
                4,
                1,
                1
            )
        );
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
//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../interfaces/IHoundOwner.sol';
import '../../payments/interfaces/ITransferTokens.sol';
import '../../shop/interfaces/ICalculateDiscount.sol';
import '../params/Constructor.sol';
import '../params/Hound.sol';


contract HoundsModifier is Ownable {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    event HoundEvent(uint256 indexed id, Hound.Struct hound);
    Constructor.Struct public control;

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }
    
    function updateHoundStamina(uint256 theId) public {
        require(theId < id);
        require(allowed[msg.sender]);
        --hounds[theId].stamina.staminaValue;
        hounds[theId].stamina.staminaValue += uint32( ( ( block.timestamp - hounds[theId].stamina.staminaLastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.staminaLastUpdate = block.timestamp;
        if ( hounds[theId].stamina.staminaValue > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.staminaValue = hounds[theId].stamina.staminaCap;
        }
        emit HoundEvent(theId,hounds[theId]);
    }

    function updateHoundRunning(uint256 theId, bool running) public returns(bool) {
        require(theId < id);
        require(allowed[msg.sender]);
        bool oldRunning = hounds[theId].running;
        hounds[theId].running = running;
        return oldRunning;
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
        emit HoundEvent(theId,hounds[theId]);
    }

    function updateHoundBreeding(uint256 hound1, uint256 hound2) public {
        require(hound1 < id && hound2 < id);
        require(allowed[msg.sender]);
        hounds[hound1].breeding.breedCooldown += 172800;
        hounds[hound1].breeding.breedLastUpdate = block.timestamp;
        hounds[hound2].breeding.breedCooldown += 172800;
        hounds[hound2].breeding.breedLastUpdate = block.timestamp;
        emit HoundEvent(hound1,hounds[hound1]);
        emit HoundEvent(hound2,hounds[hound2]);
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
        emit HoundEvent(theId,hounds[theId]);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        require(theId < id);
        require(IHoundOwner(control.boilerplate.hounds).houndOwner(theId) == msg.sender);
        if ( status )
            require(hounds[theId].breeding.breedCooldown < block.timestamp);
        hounds[theId].breeding.breedingFee = fee;
        hounds[theId].breeding.availableToBreed = status;
        emit HoundEvent(theId,hounds[theId]);
    }

}
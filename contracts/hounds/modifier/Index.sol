//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '../params/Constructor.sol';
import '../hound/Index.sol';
import '../../shop/IData.sol';


contract HoundsMethods is ERC721 {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    event HoundBreedable(uint256 indexed id, uint256 price);
    event HoundStaminaUpdate(uint256 indexed id, uint32 stamina);
    event HoundBreedingStatusUpdate(uint256 indexed id, bool status);
    Constructor.Struct public control;
    IShopData public shop;
    constructor() ERC721("","") {}
    
    function updateHoundStamina(uint256 theId) public payable {
        uint256 discount = shop.calculateDiscount(msg.sender);
        uint256 refillStaminaCooldownCost = control.fees.refillStaminaCooldownCost - ((control.fees.refillStaminaCooldownCost / 100) * discount);
        if ( allowed[msg.sender] ) {
            --hounds[theId].stamina.stamina;
        }
        if (msg.value >= refillStaminaCooldownCost) {
            hounds[theId].stamina.stamina += uint32(msg.value / refillStaminaCooldownCost);
        }
        hounds[theId].stamina.stamina += uint32( ( ( block.timestamp - hounds[theId].stamina.lastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.lastUpdate = block.timestamp;
        if ( hounds[theId].stamina.stamina > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.stamina = hounds[theId].stamina.staminaCap;
        }
        emit HoundStaminaUpdate(theId,hounds[theId].stamina.stamina);
    }

    function updateHoundBreeding(uint256 theId, uint256 breedingCooldownToConsume) public payable {
        if ( breedingCooldownToConsume == 0 ) {
            uint256 discount = shop.calculateDiscount(msg.sender);
            uint256 refillBreedingCooldownCost = control.fees.refillBreedingCooldownCost - ((control.fees.refillBreedingCooldownCost / 100) * discount);
            if ( allowed[msg.sender] || msg.value >= refillBreedingCooldownCost ) {
                hounds[theId].breeding.breedCooldown -= breedingCooldownToConsume;
            }
        }
        if ( ( block.timestamp - hounds[theId].breeding.lastUpdate ) / 3600 >= hounds[theId].breeding.breedCooldown ) {
            hounds[theId].breeding.availableToBreed = true;
            hounds[theId].breeding.lastUpdate = block.timestamp;
        }
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
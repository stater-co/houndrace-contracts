//SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

import '../payments/Payments.sol';
import '../incubator/IData.sol';

import './Constructor.sol';
import './GlobalVariables.sol';
import './Hound.sol';

interface ShopDataInterface { function calculateDiscount(address requester) external returns(uint256); }

/**
 * DIIMIIM: To be run with enable optimisation on 10 cycles
 */
contract HoundsMethods is Ownable, ERC721, ERC721Holder, Payments {
    
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) hounds;
    string error = "Failed to delegatecall";
    event NewHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event BreedHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event HoundBreedable(uint256 indexed id, uint256 price);
    event HoundNameChanded(uint256 indexed id, string name);
    event HoundStaminaUpdate(uint256 indexed id, uint32 stamina);
    event HoundBreedingStatusUpdate(uint256 indexed id, bool status);
    Constructor.Struct public control;
    
    constructor(
        Constructor.Struct memory input
    ) ERC721(input.name,input.symbol) {
        control = input;
    }

    function setGlobalParameters(
        GlobalVariables.Struct memory input
    ) external onlyOwner {

        for ( uint256 i = 0 ; i < input.allowedCallers.length ; ++i )
            allowed[input.allowedCallers[i]] = input.isAllowed[i];

        control.methods = input.methods;
        control.incubator = input.incubator;
        control.staterApi = input.staterApi;
        control.shop = input.shop;
        control.breedCost = input.breedCost;
        control.breedFee = input.breedFee;
        control.refillCost = input.refillCost;
        control.refillBreedingCooldownCost = input.refillBreedingCooldownCost;
        control.refillStaminaCooldownCost = input.refillStaminaCooldownCost;

    }

    function adminCreateHound(Hound.Struct memory theHound) external onlyOwner {

        // Emit hound creation event
        emit NewHound(id,msg.sender,theHound);

        // Set the hound values
        hounds[id] = theHound;

        // Mint hound
        _safeMint(msg.sender,id);

        // Increase hound id
        ++id;

    }
    
    function updateHound(uint256 theId, string memory houndName) external {
        require(ownerOf(theId) == msg.sender, "20");
        hounds[theId].title = houndName;
        emit HoundNameChanded(theId,houndName);
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable {

        // Perform verifications for breeding status
        require(hounds[hound2].breeding.breedCooldown < block.timestamp && hounds[hound1].breeding.breedCooldown < block.timestamp);

        // Checks to make sure the caller owns hound 1
        require(ownerOf(hound1) == msg.sender);

        // If he owns both hounds then he'll be charged using the standard fees
        if ( ownerOf(hound1) == msg.sender && ownerOf(hound2) == msg.sender ) {

            require(msg.value >= control.breedCost + control.breedFee);

        // Otherwise, he'll be charged with standard fees + that specific hound 2 breeding fee
        } else {

            // First we check if the second hound is available to breed
            require(hounds[hound2].breeding.availableToBreed);

            // Then we check if the user has sent enough ETH for the fees
            require(msg.value >= control.breedCost + control.breedFee + hounds[hound2].breeding.breedingFee);

            // Finally, we'll send the hound 2 breeding fee to the hound owner
            transferTokens(
                msg.sender,
                payable(ownerOf(hound2)),
                address(0),
                hounds[hound2].breeding.breedingFee
            );

        }

        // We send the breeding fee to our game manager account
        transferTokens(msg.sender,payable(control.staterApi),address(0),control.breedFee);

        // We reset the breeding cooldown here
        hounds[hound2].breeding.breedCooldown = block.timestamp + 172800; // 2 days
        hounds[hound1].breeding.breedCooldown = block.timestamp + 172800; // 2 days

        // Incubator call to get the offspring
        hounds[id] = IIncubatorData(control.incubator).breedHounds(
            hound1, 
            hounds[hound1].identity.geneticSequence, 
            hound2, 
            hounds[hound2].identity.geneticSequence
        );

        updateHoundBreeding(hound1,0);

        updateHoundBreeding(hound2,0);

        // Emit hound creation event
        emit BreedHound(id,msg.sender,hounds[id]);

        // Mint hound
        _safeMint(msg.sender,id);

        // Increase hound id
        ++id;

    }
    
    function updateHoundStamina(uint256 theId) public payable {

        uint256 discount = ShopDataInterface(control.shop).calculateDiscount(msg.sender);
        uint256 refillStaminaCooldownCost = control.refillStaminaCooldownCost - ((control.refillStaminaCooldownCost / 100) * discount);

        // Check if the caller is allowed to modify the hound stamina
        // The only external sources allowed to do this should be the houndrace contracts only
        if ( allowed[msg.sender] ) {

            // Modifies the hound stamina
            --hounds[theId].stamina.stamina;
        
        }

        // Replenishing stamina by users
        if (msg.value >= refillStaminaCooldownCost) {

            // Replenish stamina here
            hounds[theId].stamina.stamina += uint32(msg.value / refillStaminaCooldownCost);

        }

        // Refreshing the hound stamina based on time passed
        hounds[theId].stamina.stamina += uint32( ( ( block.timestamp - hounds[theId].stamina.lastUpdate ) / 3600 ) * hounds[theId].stamina.staminaPerHour );
        hounds[theId].stamina.lastUpdate = block.timestamp;

        // Refreshing the hound stamina
        if ( hounds[theId].stamina.stamina > hounds[theId].stamina.staminaCap ) {
            hounds[theId].stamina.stamina = hounds[theId].stamina.staminaCap;
        }

        emit HoundStaminaUpdate(theId,hounds[theId].stamina.stamina);

    }

    function updateHoundBreeding(uint256 theId, uint256 breedingCooldownToConsume) public payable {

        // This part of the code will be accessible by players
        // HoundRace contracts will call this method having breedingCooldownToConsume = 0
        if ( breedingCooldownToConsume == 0 ) {

            uint256 discount = ShopDataInterface(control.shop).calculateDiscount(msg.sender);
            uint256 refillBreedingCooldownCost = control.refillBreedingCooldownCost - ((control.refillBreedingCooldownCost / 100) * discount);

            // Check if the caller is allowed to modify the hound breeding cooldown
            // The only external sources allowed to do this should be the houndrace contracts only
            if ( allowed[msg.sender] || msg.value >= refillBreedingCooldownCost ) {

                // Modifies the hound breeding cooldown
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

    function hound(uint256 theId) external view returns(Hound.Struct memory) {
        return hounds[theId];
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return hounds[_tokenId].token_url;
    }
    
    function setTokenURI(uint256 _tokenId, string memory token_url) external onlyOwner {
        hounds[_tokenId].token_url = token_url;
    }

}
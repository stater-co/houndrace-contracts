//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract HoundsModifier is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function updateHoundStamina(
        uint256 houndId,
        uint32 amount
    ) external whitelisted {

        hounds[houndId].stamina.staminaValue -= amount;
        refreshStamina(houndId, hounds[houndId].stamina);
    }

    function updateHoundRunning(
        uint256 houndId, 
        uint256 runningOn
    ) external whitelisted returns(uint256 ranOn) {

        ranOn = hounds[houndId].profile.runningOn;
        hounds[houndId].profile.runningOn = runningOn;
        
        emit HoundQueueStatusUpdate(houndId, runningOn);
    }

    function boostHoundStamina(
        uint256 houndId, 
        address user, 
        uint256 payed
    ) 
        external 
        payable 
        nonReentrant 
    {
        require(houndId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);

        Hound.Stamina memory stamina = hounds[houndId].stamina;
        require(stamina.staminaValue < control.stamina.staminaCap);
        uint256 staminaRefill1x = control.stamina.staminaRefill1x - ((control.stamina.staminaRefill1x / 100) * discount);

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = control.stamina.staminaRefillCurrency == address(0) ? msg.value : payed;
        IPay(control.boilerplate.payments).pay{
            value: control.stamina.staminaRefillCurrency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.stamina.staminaRefillCurrency,
            new uint256[](0),
            amounts,
            control.stamina.staminaRefillCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        
        hounds[houndId].stamina.staminaValue += uint32(amounts[0] / staminaRefill1x);
        refreshStamina(houndId, hounds[houndId].stamina);
    }

    function boostHoundBreeding(
        uint256 houndId, 
        address user, 
        uint256 payed
    ) 
        external 
        payable 
        nonReentrant 
    {
        require(houndId < id);
        uint256 discount = ICalculateDiscount(control.boilerplate.shop).calculateDiscount(user);

        Hound.Breeding memory breeding = hounds[houndId].breeding;
        require(breeding.lastBreed > 0);
        uint256 refillBreedingCooldownCost = control.breeding.refillBreedingCooldownCost - ((control.breeding.refillBreedingCooldownCost / 100) * discount);

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = control.breeding.breedingCooldownCurrency == address(0) ? msg.value : payed;
        
        IPay(control.boilerplate.payments).pay{
            value: control.breeding.breedingCooldownCurrency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.breeding.breedingCooldownCurrency,
            new uint256[](0),
            amounts,
            control.breeding.breedingCooldownCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        hounds[houndId].breeding.lastBreed -= amounts[0] / refillBreedingCooldownCost;

        emit HoundBreedingStatusUpdate(houndId, breeding.lastBreed + control.breeding.breedingCooldown < block.timestamp);
    }

    function putHoundForBreed(
        uint256 houndId, 
        uint256 fee, 
        bool status
    ) external {
        require(ownerOf(houndId) == msg.sender);

        hounds[houndId].breeding.externalBreedingFee = status ? fee : 0;
        hounds[houndId].breeding.availableToBreed = status;

        emit HoundBreedable(
            houndId,
            fee,
            status
        );
    }

    function refreshStamina(
        uint256 houndId, 
        Hound.Stamina memory stamina
    ) internal {
        stamina.staminaValue += uint32( ( block.timestamp - stamina.staminaLastUpdate ) / control.stamina.staminaPerTimeUnit );
        stamina.staminaLastUpdate = block.timestamp;
        if ( stamina.staminaValue > control.stamina.staminaCap ) {
            stamina.staminaValue = control.stamina.staminaCap;
        }

        emit HoundStaminaUpdate(
            houndId, 
            stamina.staminaValue
        );
    }

    function requestHoundRename(
        uint256 houndId,
        string memory nameProposal
    ) 
        external 
        payable 
    {
        require(ownerOf(houndId) == msg.sender);
        require(bytes(nameProposal).length >= 3);
        renamingProposals[houndId] = RenamingProposal.Struct(
            nameProposal,
            false
        );

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = control.fees.renameFee;
        IPay(control.boilerplate.payments).pay{
            value: control.fees.renameFeeCurrency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.houndsRenameHandler,
            control.fees.renameFeeCurrency,
            new uint256[](0),
            amounts,
            control.fees.renameFeeCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        emit RenameProposal(houndId, renamingProposals[houndId]);
    }

}
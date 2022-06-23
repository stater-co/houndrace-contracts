//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        require(
            hounds[hound2].breeding.lastBreed + hounds[hound2].breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].breeding.lastBreed + hounds[hound1].breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].queueId == 0 && 
            hounds[hound2].queueId == 0 && 
            hounds[hound2].breeding.secondsToMaturity + hounds[hound2].identity.birthDate < block.timestamp && 
            hounds[hound1].breeding.secondsToMaturity + hounds[hound1].identity.birthDate < block.timestamp &&
            block.timestamp % hounds[hound1].breeding.breedingStart < hounds[hound1].breeding.breedingPeriod && 
            block.timestamp % hounds[hound2].breeding.breedingStart < hounds[hound2].breeding.breedingPeriod && 
            ( ( hounds[hound1].identity.geneticSequence[1] == 1 && hounds[hound2].identity.geneticSequence[1] == 2 ) || 
            ( hounds[hound1].identity.geneticSequence[1] == 2 && hounds[hound2].identity.geneticSequence[1] == 1 ) ) && 
            ownerOf(hound1) == msg.sender
        );

        IHandleHoundsBreedPayment(control.boilerplate.payments).handleHoundsBreedPayment{
            value: msg.value
        }(
            HoundsBreedPayment.Struct(
                control.fees.breedCostCurrency,
                control.fees.breedFeeCurrency,
                hounds[hound2].breeding.breedingFeeCurrency,
                control.boilerplate.staterApi,
                ownerOf(hound2),
                control.fees.breedCost,
                hounds[hound2].breeding.breedingFee,
                control.fees.breedFee,
                ownerOf(hound2) == ownerOf(hound1)
            )
        );

        hounds[hound2].breeding.lastBreed = block.timestamp;
        emit HoundBreedingStatusUpdate(hound2,hounds[hound2].breeding.availableToBreed);

        hounds[hound1].breeding.lastBreed = block.timestamp;
        emit HoundBreedingStatusUpdate(hound1,hounds[hound1].breeding.availableToBreed);

        Hound.Struct memory offspring = IBreedHounds(control.boilerplate.incubator).breedHounds(
            hound1, 
            hounds[hound1], 
            hound2, 
            hounds[hound2]
        );

        emit BreedHound(id,msg.sender,offspring);
        ++id;
    } 

}
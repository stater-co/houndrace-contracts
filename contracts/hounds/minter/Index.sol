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

        ITransferTokens(control.boilerplate.payments).transferTokens{
            value: control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0
        }(
            control.fees.breedCostCurrency,
            msg.sender,
            address(this),
            control.fees.breedCost
        );

        ITransferTokens(control.boilerplate.payments).transferTokens{
            value: control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0
        }(
            control.fees.breedFeeCurrency,
            msg.sender,
            control.boilerplate.staterApi,
            control.fees.breedFee
        );

        require(msg.value >= (control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0) + (control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0));
        if ( ownerOf(hound2) != ownerOf(hound1) ) {
            require(msg.value >= (control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0) + (control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0) + (hounds[hound2].breeding.breedingFeeCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0));
            ITransferTokens(control.boilerplate.payments).transferTokens{
                value: control.fees.breedCostCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0
            }(
                control.fees.breedCostCurrency,
                msg.sender,
                ownerOf(hound2),
                hounds[hound2].breeding.breedingFee
            );
        }

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
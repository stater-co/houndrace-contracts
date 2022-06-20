//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        require(
            hounds[hound2].breeding.lastBreed + hounds[hound2].breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].breeding.lastBreed + hounds[hound1].breeding.breedingCooldown < block.timestamp && 
            hounds[hound2].identity.secondsToMaturity + hounds[hound2].identity.birthDate < block.timestamp && 
            hounds[hound1].identity.secondsToMaturity + hounds[hound1].identity.birthDate < block.timestamp && 
            block.timestamp % hounds[hound1].breeding.breedingStart < hounds[hound1].breeding.breedingPeriod && 
            block.timestamp % hounds[hound2].breeding.breedingStart < hounds[hound2].breeding.breedingPeriod && 
            hounds[hound1].running == 0 && 
            hounds[hound2].running == 0 && 
            ownerOf(hound1) == msg.sender && 
            hound1 != hound2 && 
            ( hounds[hound1].identity.geneticSequence[1] == 1 && hounds[hound2].identity.geneticSequence[1] == 2 ) && 
            ( hounds[hound1].identity.geneticSequence[1] == 2 && hounds[hound2].identity.geneticSequence[1] == 1 )
        );

        if ( ownerOf(hound1) == msg.sender && ownerOf(hound2) == msg.sender ) {
            require(msg.value >= control.fees.breedCost + control.fees.breedFee);
        } else {
            require(
                hounds[hound2].breeding.availableToBreed && 
                msg.value >= control.fees.breedCost + control.fees.breedFee + hounds[hound2].breeding.breedingFee
            );
            require(payable(ownerOf(hound2)).send(hounds[hound2].breeding.breedingFee));
        }

        require(payable(control.boilerplate.staterApi).send(control.fees.breedFee));
        hounds[hound2].breeding.lastBreed = block.timestamp;
        hounds[hound1].breeding.lastBreed = block.timestamp;
        Hound.Struct memory offspring = IIncubator(control.boilerplate.incubator).breedHounds(
            hound1, 
            hounds[hound1], 
            hound2, 
            hounds[hound2]
        );
        IHounds(control.boilerplate.hounds).updateHoundBreeding(hound1);
        IHounds(control.boilerplate.hounds).updateHoundBreeding(hound2);
        emit BreedHound(id,msg.sender,offspring);
        ++id;
    } 

}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        require(
            hounds[hound2].breeding.breedCooldown < block.timestamp && 
            hounds[hound1].breeding.breedCooldown < block.timestamp && 
            !hounds[hound1].running && 
            !hounds[hound2].running && 
            ownerOf(hound1) == msg.sender
        );

        if ( ownerOf(hound2) == msg.sender ) {
            require(msg.value >= control.fees.breedCost + control.fees.breedFee);
        } else {
            require(
                hounds[hound2].breeding.availableToBreed && 
                msg.value >= control.fees.breedCost + control.fees.breedFee + hounds[hound2].breeding.breedingFee
            );
            require(payable(ownerOf(hound2)).send(hounds[hound2].breeding.breedingFee));
        }

        require(payable(control.boilerplate.staterApi).send(control.fees.breedFee));
        require(payable(control.boilerplate.payments).send(control.fees.breedCost + (msg.value - (hounds[hound2].breeding.breedingFee == address(0) ? control.fees.breedCost + control.fees.breedFee + hounds[hound2].breeding.breedingFee : control.fees.breedCost + control.fees.breedFee))));
        hounds[hound2].breeding.breedCooldown = block.timestamp + 172800;
        hounds[hound1].breeding.breedCooldown = block.timestamp + 172800;
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
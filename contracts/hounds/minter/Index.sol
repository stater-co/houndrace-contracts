//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor() ERC721("","") {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        require(
            hounds[hound2].breeding.breedCooldown < block.timestamp && 
            hounds[hound1].breeding.breedCooldown < block.timestamp && 
            !hounds[hound1].running && 
            !hounds[hound2].running && 
            ownerOf(hound1) == msg.sender
        );
        uint256[] memory tmp;
        console.log("ok 1");
        if ( ownerOf(hound1) == msg.sender && ownerOf(hound2) == msg.sender ) {
            console.log("ok 1.1");
            console.log(msg.value);
            console.log(control.fees.breedCost);
            console.log(control.fees.breedFee);
            require(msg.value >= control.fees.breedCost + control.fees.breedFee);
        } else {
            console.log("ok 1.2");
            require(
                hounds[hound2].breeding.availableToBreed && 
                msg.value >= control.fees.breedCost + control.fees.breedFee + hounds[hound2].breeding.breedingFee
            );
            console.log("ok 1.3");
            require(payable(ownerOf(hound2)).send(hounds[hound2].breeding.breedingFee));
        }
        console.log("ok 2");
        console.log(control.boilerplate.payments);
        console.log(control.boilerplate.staterApi);
        console.log(control.fees.breedFee);
        require(payable(control.boilerplate.staterApi).send(control.fees.breedFee));

        console.log("ok 3");
        hounds[hound2].breeding.breedCooldown = block.timestamp + 172800;
        hounds[hound1].breeding.breedCooldown = block.timestamp + 172800;
        console.log("ok 4");
        Hound.Struct memory offspring = IIncubatorMethods(control.boilerplate.incubator).breedHounds(
            hound1, 
            hounds[hound1].identity.geneticSequence, 
            hound2, 
            hounds[hound2].identity.geneticSequence
        );
        console.log("ok 5");
        IHoundsModifier(control.boilerplate.houndModifier).updateHoundBreeding(hound1,0);
        IHoundsModifier(control.boilerplate.houndModifier).updateHoundBreeding(hound2,0);
        console.log("ok 6");
        emit BreedHound(id,msg.sender,offspring);
        ++id;
    } 

}
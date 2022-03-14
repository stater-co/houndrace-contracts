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
        if ( ownerOf(hound1) == msg.sender && ownerOf(hound2) == msg.sender ) {
            require(msg.value >= control.fees.breedCost + control.fees.breedFee);
        } else {
            require(
                hounds[hound2].breeding.availableToBreed && 
                msg.value >= control.fees.breedCost + control.fees.breedFee + hounds[hound2].breeding.breedingFee
            );
            IPaymentsMethods(control.boilerplate.payments).transferTokens(
                Payment.Struct(msg.sender,
                    payable(ownerOf(hound2)),
                    address(0),
                    tmp,
                    hounds[hound2].breeding.breedingFee,
                    2
                )
            );
        }
        IPaymentsMethods(control.boilerplate.payments).transferTokens(
            Payment.Struct(
                msg.sender,
                payable(control.boilerplate.staterApi),
                address(0),
                tmp,
                control.fees.breedFee,
                2
            )
        );
        hounds[hound2].breeding.breedCooldown = block.timestamp + 172800;
        hounds[hound1].breeding.breedCooldown = block.timestamp + 172800;
        Hound.Struct memory offspring = IIncubatorMethods(control.boilerplate.incubator).breedHounds(
            hound1, 
            hounds[hound1].identity.geneticSequence, 
            hound2, 
            hounds[hound2].identity.geneticSequence
        );
        IHoundsModifier(control.boilerplate.houndModifier).updateHoundBreeding(hound1);
        IHoundsModifier(control.boilerplate.houndModifier).updateHoundBreeding(hound2);
        emit BreedHound(id,msg.sender,offspring);
        ++id;
    } 

}
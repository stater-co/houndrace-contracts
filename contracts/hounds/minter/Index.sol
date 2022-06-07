//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        require(
            hounds[hound2].breeding.breedCooldown < block.timestamp && 
            hounds[hound1].breeding.breedCooldown < block.timestamp && 
            hounds[hound1].queueId == 0 && 
            hounds[hound2].queueId == 0 && 
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

        hounds[hound2].breeding.breedCooldown = block.timestamp + 172800;
        hounds[hound1].breeding.breedCooldown = block.timestamp + 172800;
        Hound.Struct memory offspring = IBreedHounds(control.boilerplate.incubator).breedHounds(
            hound1, 
            hounds[hound1], 
            hound2, 
            hounds[hound2]
        );
        IUpdateHoundBreeding(control.boilerplate.hounds).updateHoundBreeding(hound1);
        IUpdateHoundBreeding(control.boilerplate.hounds).updateHoundBreeding(hound2);
        emit BreedHound(id,msg.sender,offspring);
        ++id;
    } 

}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';
import '../../payments/params/HoundsBreedPayment.sol';
import '../params/UpdateHoundBreedingInput.sol';


contract HoundsMinter is Params {

    constructor(string memory name, string memory symbol) Params(name,symbol) {
        
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable {

        require(
            hounds[hound2].breeding.breedCooldown < block.timestamp && 
            hounds[hound1].breeding.breedCooldown < block.timestamp && 
            !hounds[hound1].running && 
            !hounds[hound2].running && 
            ownerOf(hound1) == msg.sender
        );

        bool success;
        bytes memory output;
        (success, ) = control.boilerplate.payments.delegatecall(
            abi.encodeWithSignature(
                "handleHoundsBreedPayment(bytes)",
                abi.encode(
                    HoundsBreedPayment.Struct(
                        control.fees.breedCostCurrency,
                        control.fees.breedFeeCurrency,
                        hounds[hound2].breeding.breedingFeeCurrency,
                        control.boilerplate.staterApi,
                        ownerOf(hound2),
                        control.fees.breedCost,
                        hounds[hound2].breeding.breedingFee,
                        control.fees.breedFee,
                        ownerOf(hound2) == ownerOf(hound1),
                        hounds[hound2]
                    )
                )
            )
        );

        hounds[hound2].breeding.breedCooldown = block.timestamp + 172800;
        hounds[hound1].breeding.breedCooldown = block.timestamp + 172800;
        (success, output) = control.boilerplate.incubator.call(
            abi.encodeWithSignature(
                "breedHounds(bytes)",
                abi.encode(
                    HoundsBreedPayment.Struct(
                        control.fees.breedCostCurrency,
                        control.fees.breedFeeCurrency,
                        hounds[hound2].breeding.breedingFeeCurrency,
                        control.boilerplate.staterApi,
                        ownerOf(hound2),
                        control.fees.breedCost,
                        hounds[hound2].breeding.breedingFee,
                        control.fees.breedFee,
                        ownerOf(hound2) == ownerOf(hound1),
                        hounds[hound2]
                    )
                )
            )
        );
        Hound.Struct memory offspring = abi.decode(output,(Hound.Struct));
        
        control.boilerplate.hounds.call(
            abi.encodeWithSignature(
                "updateHoundBreeding(bytes)",
                abi.encode(
                    UpdateHoundBreedingInput.Struct(
                        hound1,
                        hound2
                    )
                )
            )
        );
        
        emit HoundEvent(id,offspring);
        ++id;
    } 

}
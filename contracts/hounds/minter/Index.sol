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

        uint256 amountToSpend;
        if ( control.fees.breedCostCurrency == address(0) ) {
            amountToSpend += control.fees.breedCost;
            require(amountToSpend <= msg.value);
        }
        IPayments(control.boilerplate.payments).transferTokens{
            value: amountToSpend
        }(
            Payment.Struct(
                msg.sender,
                payable(control.boilerplate.payments),
                control.fees.breedCostCurrency,
                new uint256[](0),
                control.fees.breedCost,
                4,
                1,
                1
            )
        );

        if ( control.fees.breedFeeCurrency == address(0) ) {
            amountToSpend += control.fees.breedFee;
            require(amountToSpend <= msg.value);
        }
        IPayments(control.boilerplate.staterApi).transferTokens{
            value: control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0
        }(
            Payment.Struct(
                msg.sender,
                payable(ownerOf(hound2)),
                control.fees.breedFeeCurrency,
                new uint256[](0),
                control.fees.breedFee,
                4,
                1,
                1
            )
        );

        if ( ownerOf(hound2) != msg.sender ) {
            if ( hounds[hound2].breeding.breedingFeeCurrency == address(0) ) {
                amountToSpend += hounds[hound2].breeding.breedingFee;
                require(amountToSpend <= msg.value);
            }
            IPayments(control.boilerplate.payments).transferTokens{
                value: hounds[hound2].breeding.breedingFeeCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0
            }(
                Payment.Struct(
                    msg.sender,
                    payable(ownerOf(hound2)),
                    hounds[hound2].breeding.breedingFeeCurrency,
                    new uint256[](0),
                    hounds[hound2].breeding.breedingFee,
                    4,
                    1,
                    1
                )
            );
        }
    
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
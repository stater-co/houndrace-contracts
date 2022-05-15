//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        console.log(hounds[hound2].breeding.breedCooldown, " < ", block.timestamp);
        console.log(hounds[hound1].breeding.breedCooldown, " < ", block.timestamp);
        require(
            hounds[hound2].breeding.breedCooldown < block.timestamp && 
            hounds[hound1].breeding.breedCooldown < block.timestamp && 
            !hounds[hound1].running && 
            !hounds[hound2].running && 
            ownerOf(hound1) == msg.sender
        );

        console.log("1 Send value: ", control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0);
        console.log("2 Send: ", control.fees.breedCostCurrency, control.boilerplate.payments, control.fees.breedCost);
        console.log(msg.sender);
        IPayments(control.boilerplate.payments).transferTokens{
            value: control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0
        }(
            control.fees.breedCostCurrency,
            msg.sender,
            payable(control.boilerplate.payments),
            control.fees.breedCost
        );

        console.log("3 Send value: ", control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0);
        console.log("4 Send: ", control.fees.breedFeeCurrency, control.boilerplate.staterApi, control.fees.breedFee);
        console.log(msg.sender);
        IPayments(control.boilerplate.payments).transferTokens{
            value: control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0
        }(
            control.fees.breedFeeCurrency,
            msg.sender,
            payable(control.boilerplate.staterApi),
            control.fees.breedFee
        );

        require(msg.value >= (control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0) + (control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0));
        if ( ownerOf(hound2) != msg.sender ) {
            console.log("5 Send value: ", hounds[hound2].breeding.breedingFeeCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0);
            console.log("6 Send: ", hounds[hound2].breeding.breedingFeeCurrency, control.boilerplate.staterApi, hounds[hound2].breeding.breedingFee);
            console.log(msg.sender);
            require(msg.value >= (control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0) + (control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0) + (hounds[hound2].breeding.breedingFeeCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0));
            IPayments(control.boilerplate.payments).transferTokens{
                value: hounds[hound2].breeding.breedingFeeCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0
            }(
                hounds[hound2].breeding.breedingFeeCurrency,
                msg.sender,
                payable(ownerOf(hound2)),
                hounds[hound2].breeding.breedingFee
            );
        }

        console.log(msg.value, " >= ");
        console.log(control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0);
        console.log(" + ", (control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0), " + ");
        console.log(hounds[hound2].breeding.breedingFeeCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0);
    
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
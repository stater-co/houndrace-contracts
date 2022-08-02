//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        require(
            matingSeason && 
            hounds[hound2].breeding.lastBreed + hounds[hound2].breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].breeding.lastBreed + hounds[hound1].breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].queueId == 0 && 
            hounds[hound2].queueId == 0 && 
            ( ( hounds[hound1].identity.geneticSequence[1] == 1 && hounds[hound2].identity.geneticSequence[1] == 2 ) || 
            ( hounds[hound1].identity.geneticSequence[1] == 2 && hounds[hound2].identity.geneticSequence[1] == 1 ) ) && 
            ownerOf(hound1) == msg.sender
        );

        console.log(msg.sender);
        console.log(matingSeason, ownerOf(hound1));


        uint256[] memory amounts = new uint256[](1);
        amounts[0] = control.fees.breedCost + control.fees.breedFee + hounds[hound2].breeding.breedingFee;
        
        console.log("OK !! from");
        console.log(msg.sender);
        console.log(amounts[0]);
        console.log("OK !! value");
        console.log(msg.value);

        console.log("this: ", control.fees.breedCostCurrency);

        console.log("=============== 1 ===============");

        IPay(control.boilerplate.payments).pay{
            value: control.fees.breedCostCurrency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.fees.breedCostCurrency,
            new uint256[](0),
            amounts,
            control.fees.breedCostCurrency == address(0) ? 3 : 2
        );

        console.log("=============== 1 ===============");

        amounts[0] = control.fees.breedFee;
        console.log("then sending: ", amounts[0]);

        console.log("=============== 2 ===============");
        console.log(control.fees.breedFeeCurrency);
        console.log(msg.value);
        console.log(address(this).balance);
        console.log(amounts[0] <= msg.value);
        IPay(control.boilerplate.payments).pay(
            control.boilerplate.payments,
            control.boilerplate.staterApi,
            control.fees.breedFeeCurrency,
            new uint256[](0),
            amounts,
            control.fees.breedFeeCurrency == address(0) ? 3 : 2
        );
        console.log("=============== 2 ===============");

        require(msg.value >= (control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0) + (control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0));
        if ( ownerOf(hound2) != ownerOf(hound1) ) {
            require(msg.value >= (control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0) + (control.fees.breedFeeCurrency == address(0) ? control.fees.breedFee : 0) + (hounds[hound2].breeding.breedingFeeCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0));
            
            amounts[0] = hounds[hound2].breeding.breedingFee;

            console.log("=============== 3 ===============");
            IPay(control.boilerplate.payments).pay(
                control.boilerplate.payments,
                ownerOf(hound2),
                control.fees.breedCostCurrency,
                new uint256[](0),
                amounts,
                control.fees.breedCostCurrency == address(0) ? 3 : 2
            );
            console.log("=============== 3 ===============");
                
        }

        console.log("=============== 4 ===============");

        hounds[hound2].breeding.lastBreed = block.timestamp;
        hounds[hound1].breeding.lastBreed = block.timestamp;

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
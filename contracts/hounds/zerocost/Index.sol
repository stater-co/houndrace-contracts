//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../gamification/interfaces/IGetBreeding.sol';
import '../../payments/params/MicroPayment.sol';
import '../../firewall/interfaces/IsAllowed.sol';
import '../params/Constructor.sol';


contract HoundsZerocost {

    HoundsConstructor.Struct public control;

    constructor(
        HoundsConstructor.Struct memory input
    ) {
        control = input;
    }

    function setGlobalParameters(
        HoundsConstructor.Struct memory globalParameters
    ) 
        external 
    {
        require(IsAllowed(control.boilerplate.firewall).isAllowed(msg.sender,msg.sig));
        control = globalParameters;
    }

    function getBreedCosts(
        uint256 hound
    ) 
        external 
        view 
        returns(
            MicroPayment.Struct memory, 
            MicroPayment.Struct memory, 
            MicroPayment.Struct memory
        ) 
    {
        return (

            // Breed cost fee
            MicroPayment.Struct(
                control.fees.breedCostCurrency,
                control.fees.breedCost
            ),

            // Breed fee for alpha dune
            MicroPayment.Struct(
                control.fees.breedFeeCurrency,
                control.fees.breedFee
            ),

            // Hound breeding fee ( in case of external breeding )
            MicroPayment.Struct(
                IGetBreeding(control.boilerplate.gamification).getBreeding(hound).breedingFeeCurrency,
                IGetBreeding(control.boilerplate.gamification).getBreeding(hound).breedingFee
            )

        );

    }

}
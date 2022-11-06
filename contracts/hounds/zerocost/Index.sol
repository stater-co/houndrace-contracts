//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../interfaces/IHound.sol';
import '../../payments/params/MicroPayment.sol';
import '../params/Constructor.sol';


contract HoundsZerocost is Ownable {

    Constructor.Struct public control;

    constructor(Constructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function getBreedCosts(uint256 hound) external view returns(
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory
    ) {
        Hound.Struct memory houndStruct = IHound(control.boilerplate.hounds).hound(hound);

        return (

            // Breed cost fee
            MicroPayment.Struct(
                control.fees.platformBreedFeeCurrency,
                control.fees.platformBreedFee
            ),

            // Breed fee for alpha dune
            MicroPayment.Struct(
                control.fees.breedTransactionFeeCurrency,
                control.fees.breedTransactionFee
            ),

            // Hound breeding fee ( in case of external breeding )
            MicroPayment.Struct(
                control.breeding.externalBreedingFeeCurrency,
                houndStruct.breeding.externalBreedingFee
            )

        );

    }

}
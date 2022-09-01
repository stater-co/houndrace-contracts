//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../../gamification/interfaces/IGetBreeding.sol';
import '../../payments/params/MicroPayment.sol';
import '../params/Constructor.sol';
import 'hardhat/console.sol';


contract HoundsZerocost is Ownable {

    Constructor.Struct public control;

    constructor(Constructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function getBreedCost(uint256 hound) external view returns(
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory
    ) {
        console.log("ok here!! ", control.boilerplate.gamification);
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
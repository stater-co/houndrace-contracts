//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../payments/params/MicroPayment.sol';

interface IGetBreedCost {

    function getBreedCost(uint256 hound) external view returns(
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory
    );

}
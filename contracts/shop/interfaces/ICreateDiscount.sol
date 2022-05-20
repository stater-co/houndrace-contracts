//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Discount.sol';


interface ICreateDiscount {

    function createDiscount(Discount.Struct memory discount) external;

}

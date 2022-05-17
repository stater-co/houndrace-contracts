//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Discount.sol';


interface IEditDiscount {

    function editDiscount(Discount.Struct memory discount, uint256 theId) external;

}

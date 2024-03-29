//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Discount.sol';


interface IEditDiscount {

    function editDiscount(Discount.Struct memory discount, uint256 discountId) external;

}

//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Discount.sol';


interface IGetDiscount {

    function getDiscount(uint256 discountId) external view returns(Discount.Struct memory);

}
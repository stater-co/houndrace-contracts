//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../discount/Index.sol';


interface IShopRestricted {

    function createDiscount(Discount.Struct memory discount) external;

    function editDiscount(Discount.Struct memory discount, uint256 theId) external;

}

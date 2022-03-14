//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../discount/Index.sol';
import '../params/Constructor.sol';


interface IShopRestricted {
    
    function setGlobalParameters(ShopConstructor.Struct memory input) external;

    function createDiscount(Discount.Struct memory discount) external;

    function editDiscount(Discount.Struct memory discount, uint256 theId) external;

}

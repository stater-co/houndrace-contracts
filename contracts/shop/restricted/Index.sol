//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract ShopRestricted is Params {

    constructor(ShopConstructor.Struct memory input) Params(input) {}

    function createDiscount(
        Discount.Struct memory discount
    ) 
        external 
        whitelisted 
    {
        discounts[id] = discount;
        emit NewDiscount(id,discount);
        ++id;
    }

    function editDiscount(
        Discount.Struct memory discount, 
        uint256 discountId
    ) 
        external 
        whitelisted 
    {
        discounts[discountId] = discount;
        emit NewDiscount(discountId, discount);
    }

}

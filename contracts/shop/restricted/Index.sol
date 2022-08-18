//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract ShopRestricted is Params {

    constructor(ShopConstructor.Struct memory input) Params(input) {}

    function createDiscount(Discount.Struct memory discount) external {
        discounts[id] = discount;
        emit NewDiscount(id,discount);
        ++id;
    }

    function editDiscount(Discount.Struct memory discount, uint256 theId) external {
        discounts[theId] = discount;
        emit NewDiscount(theId, discount);
    }

}

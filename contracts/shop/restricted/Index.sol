//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract ShopRestricted is Params {

    constructor(ShopConstructor.Struct memory input) Params(input) {}

    function createDiscount(Discount.Struct memory discount) external onlyOwner {
        discounts[id] = discount;
        emit NewDiscount(id,discount);
        ++id;
    }

    function editDiscount(Discount.Struct memory discount, uint256 theId) external onlyOwner {
        discounts[theId] = discount;
        emit NewDiscount(theId, discount);
    }

}

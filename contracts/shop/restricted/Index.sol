//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../discount/Index.sol';
import '../params/Constructor.sol';
import '../params/Index.sol';


contract ShopRestricted is Params {

    function setGlobalParameters(
        ShopConstructor.Struct memory input
    ) external {
        control = input;
    }

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

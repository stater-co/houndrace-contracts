//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import './params/Discount.sol';


interface IShop {

    function calculateDiscount(address requester) external returns(uint256);

    function createDiscount(Discount.Struct memory discount) external;

    function editDiscount(Discount.Struct memory discount, uint256 theId) external;

    function checkDiscount(address requester) external view returns(uint256);

}

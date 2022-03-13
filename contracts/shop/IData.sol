//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './Discount.sol';
import './Constructor.sol';

interface IShopData {
    function setGlobalParameters(ShopConstructor.Struct memory input) external;
    function createDiscount(Discount.Struct memory discount) external;
    function editDiscount(Discount.Struct memory discount, uint256 theId) external;
    function calculateDiscount(address requester) external returns(uint256);
    function checkDiscount(address requester) external view returns(uint256);
}

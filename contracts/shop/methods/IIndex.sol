//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IShopMethods {

    function calculateDiscount(address requester) external returns(uint256);

}

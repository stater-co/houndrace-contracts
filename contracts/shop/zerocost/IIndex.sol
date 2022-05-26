//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;


interface IShopZerocost {

    function checkDiscount(address requester) external view returns(uint256);

}
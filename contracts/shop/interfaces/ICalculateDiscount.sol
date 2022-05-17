//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface ICalculateDiscount {

    function calculateDiscount(address requester) external returns(uint256);

}

//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;


interface ICalculateDiscount {

    function calculateDiscount(address requester) external returns(uint256);

}

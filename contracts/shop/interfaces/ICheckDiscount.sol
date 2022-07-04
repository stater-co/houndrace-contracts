//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;


interface ICheckDiscount {

    function checkDiscount(address requester) external view returns(uint256);

}

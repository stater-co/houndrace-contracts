//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IViewDiscount {

    function viewDiscount(address requester) external view returns(uint256);

}
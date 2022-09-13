//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IAllowance {

    function allowance(address sender, uint256 tokenId) external view returns(bool);

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/HoundIdentity.sol';


interface ISetIdentity {

    function setIdentity(uint256 theId, HoundIdentity.Struct memory identity) external;

}
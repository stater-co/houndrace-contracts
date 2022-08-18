// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/HoundIdentity.sol';


interface IGetIdentity {

    function getIdentity(uint256 theId) external view returns(HoundIdentity.Struct memory);

}
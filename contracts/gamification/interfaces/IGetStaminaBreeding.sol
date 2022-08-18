//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/HoundBreeding.sol';
import '../params/HoundStamina.sol';


interface IGetStaminaBreeding {

    function getStaminaBreeding(uint256 id) external view returns(HoundStamina.Struct memory, HoundBreeding.Struct memory);

}
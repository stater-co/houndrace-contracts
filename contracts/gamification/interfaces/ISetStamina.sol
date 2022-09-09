//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/HoundStamina.sol';


interface ISetStamina {

    function setStamina(uint256 id, HoundStamina.Struct memory stamina) external;

}
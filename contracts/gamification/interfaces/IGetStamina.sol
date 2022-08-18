//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/HoundStamina.sol';


interface IGetStamina {

    function getStamina(uint256 id) external view returns(HoundStamina.Struct memory);

}
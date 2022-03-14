// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Constructor.sol';


interface PaymentsRestrictedMethods {

	function setGlobalParameters(PaymentsConstructor.Struct memory input) external;

}

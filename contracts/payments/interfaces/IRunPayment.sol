// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../../directives/params/Payment.sol';


interface IRunPayment {

	function runPayment(
		Payment.Struct memory payment
	) external payable;

}

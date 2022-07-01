// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../../payments/params/Payment.sol';


interface IRunPayment {

	function runPayment(
		Payment.Struct memory payment
	) external payable;

}

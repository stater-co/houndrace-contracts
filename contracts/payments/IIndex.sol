// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Payment.sol';


interface IPayments {

	function transferTokens(
		address currency,
		address from,
		address payable to,
		uint256 amount
	) external payable;

	function runPayment(
		Payment.Struct memory payment
	) external payable;

}

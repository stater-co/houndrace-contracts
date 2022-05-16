// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../directives/params/Payment.sol';


interface IPayments {

	function transferTokens(
		address currency,
		address from,
		address to,
		uint256 amount
	) external payable;

	function runPayment(
		Payment.Struct memory payment
	) external payable;

	function handleETHPayment(
		address payable to,
		uint256 amount
	) external payable;

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IPayments {

	function transferTokens(
		address currency,
		address from,
		address payable to,
		uint256 amount
	) external payable;

}

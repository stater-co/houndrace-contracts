// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;


interface IHandleETHPayment {

	function handleETHPayment(
		address payable to,
		uint256 amount
	) external payable;

}

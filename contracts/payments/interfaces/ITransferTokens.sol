// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;


interface ITransferTokens {

	function transferTokens(
		address currency,
		address from,
		address to,
		uint256 amount
	) external payable;

}

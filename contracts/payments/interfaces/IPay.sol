// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;


interface IPay {

	function pay(
		address from,
        address to,
        address currency,
        uint256[] memory id, // for batch transfers
        uint256[] memory amount, // for batch transfers
        uint32 paymentType
	) external payable;

}

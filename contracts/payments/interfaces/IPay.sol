// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;


interface IPay {

	function pay(
		address from,
        address to,
        address currency,
        uint256[] memory ids, // for batch transfers
        uint256[] memory amounts, // for batch transfers
        uint32 paymentType
	) external payable;

}

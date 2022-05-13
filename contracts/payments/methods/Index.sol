// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract PaymentsMethods is Params {

	constructor(Constructor.Struct memory input) Params(input) {}

	function transferTokens(
		address currency,
		address from,
		address payable to,
		uint256 amount
	) public payable nonReentrant {
		if ( currency != address(0) ) {
			require(IERC20(currency).transferFrom(from, to, amount));
		} else {
			require(to.send(amount));
		}
	}

	function runPayment(
		Payment.Struct memory payment
	) public payable nonReentrant {
		if ( payment.paymentType == 0 ) {
			handleERC721Payment(
				payment.currency,
				payment.from,
				payment.to,
				payment.id
			);
		} else if ( payment.paymentType == 1 ) {
			handleERC1155Payment(
				payment.currency,
				payment.from,
				payment.to,
				payment.ids,
				payment.amounts
			);
		} else if ( payment.paymentType == 2 ) {
			handleERC20Payment(
				payment.currency,
				payment.from,
				payment.to,
				payment.amount
			);
		} else if ( payment.paymentType == 3 ) {
			handleETHPayment(
				payment.to,
				payment.amount
			);
		}
	}

	function handleERC20Payment(
		address currency,
		address from,
		address payable to,
		uint256 amount
	) internal {
		require(IERC20(currency).transferFrom(from, to, amount));
	}

	function handleETHPayment(
		address payable to,
		uint256 amount
	) public payable {
		require(amount == msg.value);
		require(to.send(amount));
	}


	function handleERC1155Payment(
		address token,
		address from,
		address to,
		uint256[] memory ids,
		uint256[] memory amounts
	) internal {
		IERC1155(token).safeBatchTransferFrom(from, to, ids, amounts, "");
	}

	function handleERC721Payment(
		address token,
		address from,
		address to,
		uint256 id
	) internal {
		IERC721(token).safeTransferFrom(from, to, id);
	}

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract Payments is Params {

	function transferTokens(
		address currency,
		address from,
		address to,
		uint256 amount
	) public payable {
		console.log("transfer tokens: ");
		console.log(msg.value);
		console.log(currency, from, to, amount);
		/*
		if ( currency != address(0) ) {
			require(IERC20(currency).transferFrom(from, to, amount));
		} else {
			if ( Address.isContract(to) ) {
				console.log("Send it to a contract");
				(bool success, )= to.call{ value: msg.value }("");
				require(success);
			} else {
				console.log("Send amount to: ", to);
				require(payable(to).send(amount));
			}
		}
		*/
	}

	function runPayment(
		Payment.Struct memory payment
	) public payable {
		if ( payment.paymentType == 0 ) {
			IERC721(payment.currency).safeTransferFrom(payment.from, payment.to, payment.id);
		} else if ( payment.paymentType == 1 ) {
			IERC1155(payment.currency).safeBatchTransferFrom(payment.from, payment.to, payment.ids, payment.amounts, "");
		} else if ( payment.paymentType == 2 ) {
			require(IERC20(payment.currency).transferFrom(payment.from, payment.to, payment.amount));
		} else if ( payment.paymentType == 3 ) {
			require(payment.to.send(payment.amount));
		}
	}

}
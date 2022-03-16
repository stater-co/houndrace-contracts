// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract PaymentsMethods is Params {

	constructor(PaymentsConstructor.Struct memory input) Params(input) {}

	function transferTokens(
		Payment.Struct memory payment
	) public payable {
		if ( payment.currency != address(0) ) {
			require(IERC20(payment.currency).transferFrom(payment.from, payment.to, payment.qty));
		} else {
			require(payment.to.send(payment.qty));
		}
	}

	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external {
		for ( uint256 i = 0 ; i < thePayments.length ; ++i ) {
			payments[queueId].push(thePayments[i]);
		}
	}

	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external {
		for ( uint256 i = 0 ; i < thePayments.length ; ++i ) {
			payments[queueId][i] = thePayments[i];
		}
	}

	function sendPayments(PaymentRequest.Struct memory paymentRequest) public payable {
		uint256 l = payments[paymentRequest.rewardsBatch].length;
		uint256 totalPaid;
		for ( uint256 i = 0 ; i < l ; ++i ) {
			totalPaid += payments[paymentRequest.rewardsBatch][i].qty;
			require(msg.value >= totalPaid);
			transferTokens(payments[paymentRequest.rewardsBatch][i]);
		}
	}

	function sendHardcodedPayments(Payment.Struct[] memory payments) public payable {
		uint256 l = payments.length;
		uint256 totalPaid;
		for ( uint256 i = 0 ; i < l ; ++i ) {
			totalPaid += payments[i].qty;
			require(msg.value >= totalPaid);
			transferTokens(payments[i]);
		}
	}

}

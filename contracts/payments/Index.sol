// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import './params/Index.sol';


contract Payments is Params {

	constructor(PaymentsConstructor.Struct memory input) Params(input) {}

	function transferTokens(Payment.Struct memory payment) public payable {
        (bool success, bytes memory output) = control.payments.delegatecall(msg.data);
        require(success);
	}

	function rawSend(address token, uint256 amount, address to) public {
        (bool success, bytes memory output) = control.payments.delegatecall(msg.data);
        require(success);
	}

	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external isAllowed {
        (bool success, bytes memory output) = control.payments.delegatecall(msg.data);
        require(success);
	}

	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external isAllowed {
        (bool success, bytes memory output) = control.payments.delegatecall(msg.data);
        require(success);
	}

	function sendPayments(PaymentRequest.Struct memory paymentRequest) public payable {
		(bool success, bytes memory output) = control.payments.delegatecall(msg.data);
        require(success);
	}

	function sendHardcodedPayments(Payment.Struct[] memory payments) public payable {
		(bool success, bytes memory output) = control.payments.delegatecall(msg.data);
        require(success);
	}

}

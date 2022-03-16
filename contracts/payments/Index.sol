// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';


contract Payments is Params {

	constructor(PaymentsConstructor.Struct memory input) Params(input) {}

	function transferTokens(Payment.Struct memory payment) public payable {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
	}

	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external isAllowed {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
	}

	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external isAllowed {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
	}

	function compoundTransfer(PaymentRequest.Struct memory paymentRequest) public payable isAllowed {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
	}

}

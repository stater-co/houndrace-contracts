// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './PaymentRequest.sol';
import './Payment.sol';
import './Constructor.sol';


interface IPayments {

	function setGlobalParameters(PaymentsConstructor.Struct memory input) external;
	function transferTokens(Payment.Struct memory payment) external payable;
	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external;
	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external;
	function sendPayments(PaymentRequest.Struct memory paymentRequest) external payable;
	function sendHardcodedPayments(Payment.Struct[] memory payments) external payable;

}

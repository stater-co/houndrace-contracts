// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../payment/Request.sol';
import '../payment/Index.sol';


interface IPaymentsMethods {

	function transferTokens(Payment.Struct memory payment) external payable;

	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external;

	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external;

	function sendPayments(PaymentRequest.Struct memory paymentRequest) external payable;

	function sendHardcodedPayments(Payment.Struct[] memory payments) external payable;

}

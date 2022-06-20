// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import './params/PaymentRequest.sol';
import './params/Payment.sol';


interface IPayments {

	function transferTokens(Payment.Struct memory payment) external payable;

	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external;

	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external;

	function sendPayments(PaymentRequest.Struct memory paymentRequest) external payable;

	function sendHardcodedPayments(Payment.Struct[] memory payments) external payable;

	function rawSend(address token, uint256 amount, address to) external;

	function getPayments(uint256 batchId) external view returns(Payment.Struct[] memory);

}

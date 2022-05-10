// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Payment.sol';
import './params/Reward.sol';


interface IPayments {

	function transferTokens(Payment.Struct memory payment) external payable;

	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external;

	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external;

	function sendHardcodedPayments(Payment.Struct[] memory payments) external payable;

	function rawSend(address token, uint256 amount, address to) external payable;

	function getPayments(uint256 batchId) external view returns(Payment.Struct[] memory);

	function getReward(address token) external view returns(Reward.Struct memory);

}

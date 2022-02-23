// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './PaymentRequest.sol';
import './Payment.sol';
import './Constructor.sol';
import 'hardhat/console.sol';


contract PaymentsMethods is Ownable {

	mapping(address => bool) public allowed;
	mapping(uint256 => Payment.Struct[]) public rewards;
	Constructor.Struct public control;
    string error = "Failed to delegatecall";

	modifier isAllowed {
		require(allowed[msg.sender], "23");
		_;
	}

	constructor(Constructor.Struct memory input) {
		for ( uint256 i = 0 ; i < input.allowed.length ; ++i ) 
			allowed[input.allowed[i]] = true;
	}

	function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
		control = input;
		for ( uint256 i = 0 ; i < input.allowed.length; ++i ) {
			allowed[input.allowed[i]] = !allowed[input.allowed[i]];
		}
    }

	function transferTokens(
		Payment.Struct memory payment
	) public payable {
		console.log("Well called here");
		if ( payment.currency != address(0) ) {
			require(IERC20(payment.currency).transferFrom(payment.from, payment.to, payment.qty), "15");
		} else {
			require(payment.to.send(payment.qty), "14");
		}
	}

	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external isAllowed {
		for ( uint256 i = 0 ; i < thePayments.length ; ++i ) {
			rewards[queueId].push(thePayments[i]);
		}
	}

	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external isAllowed {
		for ( uint256 i = 0 ; i < thePayments.length ; ++i ) {
			rewards[queueId][i] = thePayments[i];
		}
	}

	function sendPayments(PaymentRequest.Struct memory paymentRequest) public payable {
		uint256 l = rewards[paymentRequest.rewardsBatch].length;
		uint256 totalPaid;
		for ( uint256 i = 0 ; i < l ; ++i ) {
			totalPaid += rewards[paymentRequest.rewardsBatch][i].qty;
			require(msg.value >= totalPaid, "30");
			transferTokens(rewards[paymentRequest.rewardsBatch][i]);
		}
	}

	function sendHardcodedPayments(Payment.Struct[] memory payments) public payable {
		uint256 l = payments.length;
		uint256 totalPaid;
		for ( uint256 i = 0 ; i < l ; ++i ) {
			totalPaid += payments[i].qty;
			require(msg.value >= totalPaid, "30");
			transferTokens(payments[i]);
		}
	}

}

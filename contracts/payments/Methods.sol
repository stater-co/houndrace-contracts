// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './Payment.sol';
import './Constructor.sol';


contract Payments {

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
    ) external {
        (bool success, bytes memory output) = input.methods.delegatecall(msg.data);
        require(success,error);
    }

	function transferTokens(
		Payment.Struct memory payment
	) public {
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

	function compoundTransfer(Payment.Struct[] memory payments) public payable {
		uint256 l = payments.length;
		uint256 totalPaid;
		for ( uint256 i = 0 ; i < l ; ++i ) {
			totalPaid += payments[i].qty;
			require(msg.value >= totalPaid, "30");
			transferTokens(payments[i]);
		}
	}

}

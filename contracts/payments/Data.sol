// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './PaymentRequest.sol';
import './Payment.sol';
import './Constructor.sol';


contract PaymentsData is Ownable {

	mapping(address => bool) public allowed;
	mapping(uint256 => Payment.Struct[]) public payments;
	Constructor.Struct public control;
    string error = "Failed to delegatecall";

	modifier isAllowed {
		require(allowed[msg.sender], "23");
		_;
	}

	constructor(Constructor.Struct memory input) {
		for ( uint256 i = 0 ; i < input.allowed.length ; ++i ) 
			allowed[input.allowed[i]] = true;
		control = input;
	}

	function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
        (bool success, bytes memory output) = input.methods.delegatecall(msg.data);
        require(success,error);
    }

	function transferTokens(
		Payment.Struct memory payment
	) public payable {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success,error);
	}

	function addPayments(uint256 queueId, Payment.Struct[] memory thePayments) external isAllowed {
		for ( uint256 i = 0 ; i < thePayments.length ; ++i ) {
			payments[queueId].push(thePayments[i]);
		}
	}

	function setPayments(uint256 queueId, Payment.Struct[] memory thePayments) external isAllowed {
		for ( uint256 i = 0 ; i < thePayments.length ; ++i ) {
			payments[queueId][i] = thePayments[i];
		}
	}

	function compoundTransfer(PaymentRequest.Struct memory paymentRequest) public payable isAllowed {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success,error);
	}

}

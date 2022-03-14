// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import './params/Index.sol';
import './payment/Request.sol';


contract PaymentsData is Params, Ownable {

	constructor(PaymentsConstructor.Struct memory input) {
		for ( uint256 i = 0 ; i < input.allowed.length ; ++i ) 
			allowed[input.allowed[i]] = true;
		control = input;
	}

	function setGlobalParameters(
        PaymentsConstructor.Struct memory input
    ) external onlyOwner {
        (bool success, bytes memory output) = input.restricted.delegatecall(msg.data);
        require(success);
    }

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

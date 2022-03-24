// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '../payment/Index.sol';
import '../payment/Request.sol';
import './Constructor.sol';


contract Params is Ownable {

	mapping(address => bool) public allowed;
	mapping(uint256 => Payment.Struct[]) public payments;
	PaymentsConstructor.Struct public control;

	modifier isAllowed {
		require(allowed[msg.sender]);
		_;
	}

	constructor(PaymentsConstructor.Struct memory input) {
		for ( uint256 i = 0 ; i < input.allowed.length ; ++i ) 
			allowed[input.allowed[i]] = !allowed[input.allowed[i]];
		control = input;
	}

	function setGlobalParameters(PaymentsConstructor.Struct memory globalParameters) external onlyOwner {
		for ( uint256 i = 0 ; i < globalParameters.allowed.length ; ++i ) 
			allowed[globalParameters.allowed[i]] = !allowed[globalParameters.allowed[i]];
		control = globalParameters;
    }

}

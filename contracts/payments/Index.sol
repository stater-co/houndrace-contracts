// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Payments is Params {

	constructor(Constructor.Struct memory input) Params(input) {}

	function transferTokens(
		address currency,
		address from,
		address payable to,
		uint256 amount
	) public payable {
        (bool success, bytes memory output) = control.payments.delegatecall(msg.data);
        require(success);
	}

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract PaymentsMethods is Params {

	constructor(Constructor.Struct memory input) Params(input) {}

	function transferTokens(
		address currency,
		address from,
		address payable to,
		uint256 amount
	) public payable nonReentrant {
		if ( currency != address(0) ) {
			require(IERC20(currency).transferFrom(from, to, amount));
		} else {
			require(to.send(amount));
		}
	}

	function rawSend(address token, uint256 amount, address to) external payable nonReentrant {
		if ( token != address(0) ) {
			IERC20(token).transferFrom(msg.sender, to, amount);
		} else {
			require(payable(to).send(amount));
		}
	}

}
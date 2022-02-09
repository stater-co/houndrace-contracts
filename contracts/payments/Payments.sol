// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './Payment.sol';


contract Payments {

	function transferTokens(
        address from,
        address payable to,
        address currency,
        uint256 qty
	) public {
		if ( currency != address(0) ) {
			require(IERC20(currency).transferFrom(from, to, qty), "15");
		} else {
			require(to.send(qty), "14");
		}
	}

	function compoundTransfer(Payment.Struct[] memory payments) public payable {
		uint256 l = payments.length;
		uint256 totalPaid;
		for ( uint256 i = 0 ; i < l ; ++i ) {
			totalPaid += payments[i].qty;
			require(msg.value >= totalPaid, "30");
			transferTokens(payments[i].from, payable(payments[i].to), payments[i].currency, payments[i].qty);
		}
	}

}

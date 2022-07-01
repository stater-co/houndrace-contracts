// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract Payments is Params {

	function transferTokens(
		address currency,
		address from,
		address to,
		uint256 amount
	) public payable {
		if ( currency != address(0) ) {
			require(IERC20(currency).transferFrom(from, to, amount));
		} else {
			if ( Address.isContract(to) ) {
				(bool success, )= to.call{ value: msg.value }("");
				require(success);
			} else {
				require(payable(to).send(amount));
			}
		}
	}

	function runPayment(
		address from,
        address to,
        address currency,
        uint256 id,
        uint256 amount,
        uint32 paymentType
	) public payable {
		if ( paymentType == 0 ) {
			IERC721(currency).safeTransferFrom(from, to, id);
		} else if ( paymentType == 1 ) {
			IERC1155(currency).safeBatchTransferFrom(from, to, id, amount, "");
		} else if ( paymentType == 2 ) {
			require(IERC20(currency).transferFrom(from, to, amount));
		} else if ( paymentType == 3 ) {
			require(payable(to).send(amount));
		}
	}

}
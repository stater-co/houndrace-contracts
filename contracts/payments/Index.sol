// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import './params/Index.sol';


contract Payments is Params {

	function pay(
		address from,
        address to,
        address currency,
        uint256[] memory ids, // for batch transfers
        uint256[] memory amounts, // for batch transfers
        uint32 paymentType
	) public payable {
		console.log("ok 0");
		if ( paymentType == 0 ) {
			console.log("ok 1");
			IERC721(currency).safeTransferFrom(from, to, ids[0]);
		} else if ( paymentType == 1 ) {
			console.log("ok 2");
			IERC1155(currency).safeBatchTransferFrom(from, to, ids, amounts, "");
		} else if ( paymentType == 2 ) {
			console.log("ok 3");
			if ( from != address(this) ) {
				console.log("ok 3.1");
				console.log(IERC20(currency).allowance(from,address(this)));
				require(IERC20(currency).transferFrom(from, to, amounts[0]));
			} else {
				console.log("ok 3.2");
				require(IERC20(currency).transfer(to, amounts[0]));
			}
		} else if ( paymentType == 3 ) {
			console.log("ok 4");
			if ( Address.isContract(to) ) {
				console.log("ok 4.1");
				(bool success, )= to.call{ value: amounts[0] }("");
				require(success);
			} else {
				console.log("ok 4.2");
				require(payable(to).send(amounts[0]));
			}
		}
	}

}
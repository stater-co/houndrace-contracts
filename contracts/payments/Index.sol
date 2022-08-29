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
		if ( paymentType == 0 ) {
			IERC721(currency).safeTransferFrom(from, to, ids[0]);
		} else if ( paymentType == 1 ) {
			IERC1155(currency).safeBatchTransferFrom(from, to, ids, amounts, "");
		} else if ( paymentType == 2 ) {
			if ( from != address(this) ) {
				require(IERC20(currency).transferFrom(from, to, amounts[0]));
			} else {
				require(IERC20(currency).transfer(to, amounts[0]));
			}
		} else if ( paymentType == 3 ) {
			if ( Address.isContract(to) ) {
				(bool success, )= to.call{ value: amounts[0] }("");
				require(success);
			} else {
				require(payable(to).send(amounts[0]));
			}
		}
	}

}
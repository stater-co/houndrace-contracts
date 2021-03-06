// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract Payments is Params {

	function pay(
		address from,
        address to,
        address currency,
        uint256[] memory id, // for batch transfers
        uint256[] memory amount, // for batch transfers
        uint32 paymentType
	) public payable {
		if ( paymentType == 0 ) {
			IERC721(currency).safeTransferFrom(from, to, id[0]);
		} else if ( paymentType == 1 ) {
			IERC1155(currency).safeBatchTransferFrom(from, to, id, amount, "");
		} else if ( paymentType == 2 ) {
			require(IERC20(currency).transferFrom(from, to, amount[0]));
		} else if ( paymentType == 3 ) {
			if ( Address.isContract(to) ) {
				(bool success, )= to.call{ value: amount[0] }("");
				require(success);
			} else {
				require(payable(to).send(amount[0]));
			}
		}
	}

}
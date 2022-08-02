// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import './params/Index.sol';


contract Payments is Params {

	function pay(
		address from,
        address to,
        address currency,
        uint256[] memory id, // for batch transfers
        uint256[] memory amount, // for batch transfers
        uint32 paymentType
	) public payable {
		console.log("================");
		console.log(from);
		console.log(to);
		console.log(currency);
		console.log(paymentType);
		console.log("================");
		if ( paymentType == 0 ) {
			IERC721(currency).safeTransferFrom(from, to, id[0]);
		} else if ( paymentType == 1 ) {
			IERC1155(currency).safeBatchTransferFrom(from, to, id, amount, "");
		} else if ( paymentType == 2 ) {
			console.log("here...");
			console.log(amount[0]);
			console.log("Allowed: ", IERC20(currency).allowance(from, address(this)));
			if ( from != address(this) ) {
				require(IERC20(currency).transferFrom(from, address(this), amount[0]));
			}
			console.log("We jump straight to transfer");
			require(IERC20(currency).transfer(to, amount[0]));
		} else if ( paymentType == 3 ) {
			console.log(amount[0]);
			console.log("to address: ", to);
			console.log("msg.value");
			console.log(msg.value);
			console.log("amount[0]");
			console.log(amount[0]);
			console.log(Address.isContract(to));
			if ( Address.isContract(to) ) {
				(bool success, )= to.call{ value: amount[0] }("");
				require(success);
			} else {
				require(payable(to).send(amount[0]));
			}
		}
		console.log("DONE");
	}

}
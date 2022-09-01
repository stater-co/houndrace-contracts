// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import './params/Index.sol';


contract Payments is Params {

    constructor(PaymentsConstructor.Struct memory input) Params(input) {}

	function pay(
		address from,
        address to,
        address currency,
        uint256[] memory ids, // for batch transfers
        uint256[] memory amounts, // for batch transfers
        Payment.PaymentTypes paymentType
	) public payable nonReentrant {

		if ( paymentType == Payment.PaymentTypes.ERC721 ) {

			IERC721(currency).safeTransferFrom(from, to, ids[0]);

		} else if ( paymentType == Payment.PaymentTypes.ERC1155 ) {

			IERC1155(currency).safeBatchTransferFrom(from, to, ids, amounts, "");
			
			if ( to == control.alphadune ) {

				for ( uint256 i = 0 ; i < ids.length ; ++i ) {

					bool exists;
					for ( uint256 j = 0 ; j < alphaduneReservoirs[currency].ids.length ; ++j ) {
					
						if ( ids[i] == alphaduneReservoirs[currency].ids[j] ) {
							alphaduneReservoirs[currency].amounts[j] += amounts[i];
							exists = true;
						}
					}
				

					if ( !exists ) {
						alphaduneReservoirs[currency].ids.push(ids[i]);
						alphaduneReservoirs[currency].amounts.push(amounts[i]);
					}

				}

			}

		} else if ( paymentType == Payment.PaymentTypes.ERC20 ) {

			if ( from != address(this) ) {
				require(IERC20(currency).transferFrom(from, to, amounts[0]));
			} else {
				require(IERC20(currency).transfer(to, amounts[0]));
			}

			if ( to == control.alphadune ) {
				rewardsReservoirs[currency].amounts[0] += amounts[0];
			}

		} else if ( paymentType == Payment.PaymentTypes.DEFAULT ) {

			if ( Address.isContract(to) ) {
				(bool success, )= to.call{ value: amounts[0] }("");
				require(success);
			} else {
				require(payable(to).send(amounts[0]));
			}

			if ( to == control.alphadune ) {
				rewardsReservoirs[currency].amounts[0] += amounts[0];
			}

		}
	}

}
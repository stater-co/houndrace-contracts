// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract PaymentsRestricted is Params {

	
    constructor(PaymentsConstructor.Struct memory input) Params(input) {}

	function fillRewardsReservoir(
        address currency,
        uint256[] memory ids, // for batch transfers
        uint256[] memory amounts, // for batch transfers
		Payment.PaymentTypes paymentType
	) external payable {

		for ( uint256 i = 0 ; i < ids.length ; ++i ) {
			alphaduneReservoirs[paymentType][currency][ids[i]] += amounts[i];
		}

		if ( paymentType == Payment.PaymentTypes.ERC1155 ) {

			IERC1155(currency).safeBatchTransferFrom(msg.sender, address(this), ids, amounts, '0x00');

		} else if ( paymentType == Payment.PaymentTypes.ERC20 ) {

			uint256 total = 0;
			for ( uint256 i = 0 ; i < amounts.length ; ++i ) {
				total += amounts[i];
			}

			IERC20(currency).transferFrom(msg.sender, address(this), total);

		}

	}

}
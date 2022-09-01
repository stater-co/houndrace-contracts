// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract PaymentsRestricted is Params {

	
    constructor(PaymentsConstructor.Struct memory input) Params(input) {}

	function fillRewardsReservoir(
		address reservoirAddress,
		Reservoir.Struct memory reservoir
	) external payable onlyOwner {

		require(reservoir.paymentType > Payment.PaymentTypes.ERC721);
		require(reservoir.ids.length == reservoir.amounts.length);

		uint256 total = 0;
		for ( uint256 i = 0 ; i < reservoir.amounts.length ; ++i ) {
			total += reservoir.amounts[i];
		}

		if ( reservoir.paymentType == Payment.PaymentTypes.ERC1155 ) {

			IERC1155(reservoirAddress).safeBatchTransferFrom(msg.sender, address(this), reservoir.ids, reservoir.amounts, '0x00');

			for ( uint256 i = 0 ; i < reservoir.ids.length ; ++i ) {

				bool found;
				for ( uint256 j = 0 ; j < rewardsReservoirs[reservoirAddress].ids.length ; ++j ) {
					if ( rewardsReservoirs[reservoirAddress].ids[j] == reservoir.ids[i] ) {
						rewardsReservoirs[reservoirAddress].amounts[j] += reservoir.amounts[i];
						found = true;
					}
				}
				
				if ( !found ) {
					rewardsReservoirs[reservoirAddress].ids.push(reservoir.ids[i]);
					rewardsReservoirs[reservoirAddress].amounts.push(reservoir.amounts[i]);
				}

			}

		} else if ( reservoir.paymentType == Payment.PaymentTypes.ERC20 ) {

			IERC20(reservoirAddress).transferFrom(msg.sender, address(this), total);
			rewardsReservoirs[reservoirAddress].amounts[0] += total;

		} else if ( reservoir.paymentType == Payment.PaymentTypes.DEFAULT ) {

			require(msg.value <= total);
			rewardsReservoirs[reservoirAddress].amounts[0] += total;

		}

	}

}
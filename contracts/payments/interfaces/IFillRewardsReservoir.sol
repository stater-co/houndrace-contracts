// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Payment.sol';

interface IFillRewardsReservoir {

	function fillRewardsReservoir(
        address currency,
        uint256[] memory ids,
        uint256[] memory amounts,
		Payment.PaymentTypes paymentType
	) external payable;

}

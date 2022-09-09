// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
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
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
	}

	function fillRewardsReservoir(
		address reservoirAddress,
		Reservoir.Struct memory reservoir
	) external payable onlyOwner {
		(bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
	}

}
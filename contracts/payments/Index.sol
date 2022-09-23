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
	) 
        public 
        payable 
        nonReentrant 
    {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
	}

	function fillRewardsReservoir(
        address currency,
        uint256[] memory ids,
        uint256[] memory amounts,
		Payment.PaymentTypes paymentType
	) 
        external 
        payable 
    {
		(bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
	}

}
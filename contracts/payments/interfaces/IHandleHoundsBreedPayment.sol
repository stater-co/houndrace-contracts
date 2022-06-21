// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/HoundsBreedPayment.sol';


interface IHandleHoundsBreedPayment {

	function handleHoundsBreedPayment(
		HoundsBreedPayment.Struct memory houndsBreedPayment
	) external payable;

}

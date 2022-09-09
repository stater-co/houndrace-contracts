// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Reservoir.sol';

interface IFillRewardsReservoir {

	function fillRewardsReservoir(
		address reservoirAddress,
		Reservoir.Struct memory reservoir
	) external payable;

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Constructor.sol';


contract PaymentsRestrictedMethods {

	mapping(address => bool) public allowed;
	PaymentsConstructor.Struct public control;

	function setGlobalParameters(PaymentsConstructor.Struct memory input) external {
		control.methods = input.methods;
		for ( uint256 i = 0 ; i < input.allowed.length; ++i ) {
			allowed[input.allowed[i]] = !allowed[input.allowed[i]];
		}
    }

}

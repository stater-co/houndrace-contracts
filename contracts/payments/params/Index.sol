// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../payment/Index.sol';
import './Constructor.sol';
import "hardhat/console.sol";


contract Params is Ownable {

	mapping(address => bool) public allowed;
	mapping(uint256 => Payment.Struct[]) public payments;
	PaymentsConstructor.Struct public control;

	modifier isAllowed {
		require(allowed[msg.sender]);
		_;
	}

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Address.sol';
import './Constructor.sol';
import '../../directives/params/Payment.sol';
import 'hardhat/console.sol';


contract Params is Ownable, ReentrancyGuard {

	mapping(address => bool) public allowed;
	Constructor.Struct public control;

	modifier isAllowed {
		require(allowed[msg.sender]);
		_;
	}

	constructor(Constructor.Struct memory input) {
		for ( uint256 i = 0 ; i < input.allowed.length ; ++i ) 
			allowed[input.allowed[i]] = !allowed[input.allowed[i]];
		control = input;
	}

	function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
		for ( uint256 i = 0 ; i < globalParameters.allowed.length ; ++i ) 
			allowed[globalParameters.allowed[i]] = !allowed[globalParameters.allowed[i]];
		control = globalParameters;
    }

    fallback() external payable {}

}

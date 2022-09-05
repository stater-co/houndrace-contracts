// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Address.sol';
import '../../payments/params/Payment.sol';
import './Reservoir.sol';
import './Constructor.sol';


contract Params is Ownable, ReentrancyGuard {
    mapping(address => Reservoir.Struct) public alphaduneReservoirs;
    mapping(address => Reservoir.Struct) public rewardsReservoirs;
    PaymentsConstructor.Struct public control;

    constructor(PaymentsConstructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(PaymentsConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    fallback() external payable {}
    receive() external payable {}

}

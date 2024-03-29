// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Address.sol';
import '../../payments/params/Payment.sol';
import '../../whitelist/Index.sol';
import './Constructor.sol';


contract Params is ReentrancyGuard, Whitelist {
    
    event NewPayment(
        address from,
        address to,
        address currency,
        uint256[] ids,
        uint256[] amounts,
        Payment.PaymentTypes paymentType
    );
    
    PaymentsConstructor.Struct public control;

    constructor(PaymentsConstructor.Struct memory input) Whitelist(input.operators, input.targets) {
        control = input;
    }
    
    function setGlobalParameters(PaymentsConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        updateWhitelist(globalParameters.operators, globalParameters.targets);
    }

    fallback() external payable {}
    receive() external payable {}

}

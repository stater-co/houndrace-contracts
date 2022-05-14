// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Directives is Params {
    
    constructor(Constructor.Struct memory input) Params(input) {}

    function createRewardsBatch(Reward.Struct[] memory batch) external onlyOwner {
        (bool success, bytes memory output) = control.restricted.delegatecall(msg.data);
        require(success, abi.decode(output,(string)));
    }

    function createPaymentsBatch(Payment.Struct[] memory batch) external onlyOwner {
        (bool success, bytes memory output) = control.restricted.delegatecall(msg.data);
        require(success, abi.decode(output,(string)));
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import './params/Index.sol';


contract Directives is Params {
    
    constructor(Constructor.Struct memory input) Params(input) {}

    function createRewardsBatch(Reward.Struct[] memory batch) external onlyOwner {
        (bool success,) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function createPaymentsBatch(Payment.Struct[] memory batch) external onlyOwner {
        (bool success,) = control.restricted.delegatecall(msg.data);
        require(success);
    }

}

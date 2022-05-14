// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Constructor.sol';
import './params/Reward.sol';
import './params/Payment.sol';


interface IDirectives { 

    function setGlobalParameters(Constructor.Struct memory input) external;

    function createRewardsBatch(Reward.Struct[] memory batch) external;

    function createPaymentsBatch(Payment.Struct[] memory batch) external;

    function getPayments(uint256 id) external view returns(Payment.Struct[] memory);

    function getRewards(uint256 id) external view returns(Reward.Struct[] memory);

}

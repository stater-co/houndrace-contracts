// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import './Payment.sol';
import './Reward.sol';


contract Params is Ownable {

    event NewPaymentBatch(uint256 indexed id, Payment.Struct[] payments);
    event NewRewardBatch(uint256 indexed id, Reward.Struct[] rewards);

    uint256 public paymentId = 1;
    uint256 public rewardId = 1;
    Constructor.Struct public control;
    mapping(uint256 => Payment.Struct[]) public payments;
    mapping(uint256 => Reward.Struct[]) public rewards;

    constructor(Constructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function getPayments(uint256 id) external view returns(Payment.Struct[] memory) {
        return payments[id];
    }

    function getRewards(uint256 id) external view returns(Reward.Struct[] memory) {
        return rewards[id];
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Reward.sol';


interface ICreateRewardsBatch { 

    function createRewardsBatch(Reward.Struct[] memory batch) external;

}

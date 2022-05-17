// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Reward.sol';


interface IGetRewards { 

    function getRewards(uint256 id) external view returns(Reward.Struct[] memory);

}

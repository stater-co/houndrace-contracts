// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Reward.sol';


interface IGetRewards { 

    function getRewards(uint256 id) external view returns(Reward.Struct[] memory);

}

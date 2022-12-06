//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Arena.sol';


interface IPlatformAndArenaFee {
    
    function platformAndArenaFee(uint256 arenaId) external view returns(uint256);
    
}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Arena.sol';


interface IPlatformAndArenaFeeCurrency {
    
    function platformAndArenaFeeCurrency(uint256 arenaId) external view returns(address);
    
}
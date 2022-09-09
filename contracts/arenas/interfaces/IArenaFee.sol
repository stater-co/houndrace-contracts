//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Arena.sol';


interface IArenaFee {
    
    function arenaFee(uint256 theId) external view returns(uint256);
    
}
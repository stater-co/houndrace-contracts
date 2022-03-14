//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../arena/Index.sol';
import '../params/Constructor.sol';


interface ArenasRestricted {

    function setGlobalParameters(ArenasConstructor.Struct memory arenasConstructor) external;

    function createArena(Arena.Struct memory arena) external;
    
    function editArena(uint256 theId, Arena.Struct memory arena) external;

}
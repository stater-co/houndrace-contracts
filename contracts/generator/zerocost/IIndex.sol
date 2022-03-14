// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;


interface IGeneratorZerocost {

    function simulateClassicRace(
        uint256[] memory participants, 
        uint256 terrain, 
        uint256 theRandomness
    ) 
        external 
        view 
    returns(
        uint256[] memory, 
        uint256[] memory
    );

}
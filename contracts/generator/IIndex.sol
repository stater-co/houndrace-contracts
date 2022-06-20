// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../hounds/params/Hound.sol';
import '../queues/params/Queue.sol';
import '../races/params/Race.sol';


interface IGenerator {

    function simulateClassicRace(uint256[] memory participants, uint256 terrain, uint256 theRandomness) external view returns(uint256[] memory, uint256[] memory);

    function generate(Queue.Struct memory queue) external returns(Race.Struct memory);

}

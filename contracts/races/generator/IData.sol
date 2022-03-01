// SPDX-License-Identifier: MIT
pragma solidity <=0.8.12;
import '../races/Queue.sol';
import '../races/Race.sol';
import '../../hounds/Hound.sol';


interface IRaceGeneratorData {
    function simulateClassicRace(Hound.Struct[] memory participants, uint256 terrain, uint256 theRandomness) external returns(bytes memory seed);
    function generate(Queue.Struct memory queue) external payable returns(Race.Struct memory race);
}

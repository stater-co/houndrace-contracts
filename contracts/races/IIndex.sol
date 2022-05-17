// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../queues/params/Queue.sol';
import './params/Race.sol';

interface IRaces {

    function raceStart(Queue.Struct memory queue, uint256 theId) external;

    function uploadRace(Race.Struct memory race) external payable;

    function participantsOf(uint256 theId) external view returns(uint256[] memory);

}

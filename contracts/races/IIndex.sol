// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../queues/params/Queue.sol';
import './params/Race.sol';

interface IRacesMethods {

    function raceStart(Queue.Struct memory queue) external;

    function uploadRace(Race.Struct memory race) external payable;

}

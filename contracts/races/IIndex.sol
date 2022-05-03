// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../queues/params/Queue.sol';
import './params/Race.sol';
import '../payments/params/Payment.sol';

interface IRacesMethods {

    function raceStart(Queue.Struct memory queue) external payable;

    function uploadRace(Race.Struct memory race, Payment.Struct[] memory payments) external payable;

}

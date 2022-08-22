// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../queues/params/Queue.sol';


interface IRaceStart {

    function raceStart(Queue.Struct memory queue, uint256 theId) external;

}

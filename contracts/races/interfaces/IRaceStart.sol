// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../queues/params/Queue.sol';


interface IRaceStart {

    function raceStart(
        uint256 queueId,
        Queue.Struct memory queue
    ) external;

}

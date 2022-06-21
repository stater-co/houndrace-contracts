// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../../queues/params/Queue.sol';
import '../../races/params/Race.sol';


interface IGenerate {

    function generate(Queue.Struct memory queue, uint256 queueId) external returns(Race.Struct memory);

}

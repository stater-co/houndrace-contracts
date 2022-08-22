// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../queues/params/Queue.sol';
import '../../races/params/Race.sol';


interface IGenerate {

    function generate(Queue.Struct memory queue, uint256 queueId) external view returns(Race.Struct memory);

}

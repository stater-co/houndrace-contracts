// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../../races/params/Queue.sol';
import '../../races/params/Race.sol';


interface IGeneratorMethods {

    function generate(Queue.Struct memory queue) external payable returns(Race.Struct memory race);

}

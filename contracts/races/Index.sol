// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './params/Index.sol';


contract Races is Params {
    
    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(
        uint256 theId, 
        uint256 queueId,
        Race.Struct memory race
    ) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function raceStart(
        uint256 queueId,
        Queue.Struct memory queue
    ) external {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function handleRaceLoot(
        Payment.Struct memory payment
    ) public payable {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

}
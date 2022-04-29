// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Races is Params {
    
    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function raceStart(Queue.Struct memory queue) external payable {
        require(allowed[msg.sender]);
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

}
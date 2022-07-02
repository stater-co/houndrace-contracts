// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import './params/Index.sol';


contract Races is Params {
    
    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(uint256 theId, Race.Struct memory race) external payable {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function handleRaceLoot(
        address[] memory from,
        address[] memory to,
        address[] memory currency,
        uint256[][] memory id,
        uint256[][] memory amount,
        uint32[] memory paymentType
    ) public payable {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

}
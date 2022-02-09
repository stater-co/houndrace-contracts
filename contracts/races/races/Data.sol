// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import '@openzeppelin/contracts/access/Ownable.sol';
import '../../utils/FilterForWinners.sol';
import '../../hounds/IData.sol';
import '../../arenas/Arena.sol';

import '../generator/IData.sol';

import './Race.sol';
import '../Constructor.sol';


contract RacesData is Ownable {
    
    event NewRace(uint256 indexed id, Race.Struct race);
    event NewFinishedRace(uint256 indexed id, Race.Finished race);
    event QueuesCreation(uint256 indexed idStart, uint256 indexed idStop, Race.Struct[] newQueues);
    event DeleteQueue(uint256 indexed id);
    event UploadRace(uint256 indexed id, Race.Finished race);
    event PlayerEnqueue(uint256 indexed id, uint256 indexed hound, address indexed player);
    uint256 public id = 1;
    Constructor.Struct public control;
    mapping(uint256 => Race.Struct) public queues;
    string error = "Failed to delegatecall";

    /**
     * DIIMIIM:
     * We'll save the races structure as bytes and we'll decode them into their specific tuple using their specific generator contract
     */
    mapping(uint256 => Race.Finished) public races;
    
    constructor(
        Constructor.Struct memory input
    ) {
        control = input;
    }

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function createQueues(Race.Struct[] memory theQueues) external onlyOwner {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function deleteQueue(uint256 theId) external onlyOwner {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function uploadRace(Race.Finished memory race) external onlyOwner {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function queue(uint256 theId) external view returns(Race.Struct memory) {
        return queues[theId];
    }

}

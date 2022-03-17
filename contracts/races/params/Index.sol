// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Race.sol';
import './Queue.sol';
import './Constructor.sol';
import '../../payments/payment/Index.sol';
import '../../hounds/modifier/IIndex.sol';
import '../../arenas/arena/Index.sol';
import '../../arenas/zerocost/IIndex.sol';
import '../../utils/Converters.sol';
import '../../payments/methods/IIndex.sol';
import '../../hounds/hound/Index.sol';
import '../../hounds/zerocost/IIndex.sol';


contract Params is Ownable {
    
    event NewRace(uint256 indexed id, Queue.Struct race);
    event NewFinishedRace(uint256 indexed id, Race.Struct race);
    event UploadRace(uint256 indexed id, Race.Struct race);
    event QueuesCreation(uint256 indexed idStart, uint256 indexed idStop, Queue.Struct[] newQueues);
    event DeleteQueue(uint256 indexed id);
    event PlayerEnqueue(uint256 indexed id, uint256 indexed hound, address indexed player);

    uint256 public id = 1;
    RacesConstructor.Struct public control;
    mapping(uint256 => Queue.Struct) public queues;
    mapping(uint256 => Race.Struct) public races;
    mapping(uint256 => Payment.Struct[]) public rewards;

    constructor(RacesConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(
        RacesConstructor.Struct memory globalParameters
    ) external onlyOwner {
        control = globalParameters;
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Queue.sol';
import './Constructor.sol';
import '../../payments/payment/Index.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/zerocost/IIndex.sol';
import '../zerocost/IIndex.sol';
import '../../utils/Converters.sol';
import '../../payments/methods/IIndex.sol';
import '../../hounds/IIndex.sol';
import '../../utils/Withdrawable.sol';
import '../../races/methods/IIndex.sol';
import 'hardhat/console.sol';


contract Params is Ownable, Withdrawable {
    
    event QueuesCreation(uint256 indexed idStart, uint256 indexed idStop, Queue.Struct[] newQueues);
    event DeleteQueue(uint256 indexed id);
    event PlayerEnqueue(uint256 indexed id, uint256 indexed hound, address indexed player);

    uint256 public id = 1;
    QueuesConstructor.Struct public control;
    mapping(uint256 => Queue.Struct) public queues;

    constructor(QueuesConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(QueuesConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

}
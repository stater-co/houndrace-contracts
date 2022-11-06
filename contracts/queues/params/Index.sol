// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import './Queue.sol';
import './Constructor.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/interfaces/IArenaOwner.sol';
import '../../arenas/interfaces/IPlatformAndArenaFee.sol';
import '../../arenas/interfaces/IPlatformAndArenaFeeCurrency.sol';
import '../../payments/interfaces/IPay.sol';
import '../../payments/params/MicroPayment.sol';
import '../../hounds/interfaces/IUpdateHoundRunning.sol';
import '../../hounds/interfaces/IHoundOwner.sol';
import '../../hounds/interfaces/IHound.sol';
import '../../races/interfaces/IRaceStart.sol';
import '../../whitelist/Index.sol';
import '../../hounds/params/Hound.sol';
import '../interfaces/IEnqueueCost.sol';


contract Params is ReentrancyGuard, Whitelist {
    
    event QueuesCreation(uint256 indexed idStart, uint256 indexed idStop, Queue.Struct[] newQueues);
    event DeleteQueue(uint256 indexed id);
    event PlayerEnqueue(uint256 indexed id, uint256 indexed hound, address indexed player);
    event EditQueue(uint256 indexed id, Queue.Struct queue);
    event QueueClosed(uint256 indexed id);
    event Unenqueue(uint256 indexed id, uint256 indexed hound);

    uint256 public id = 1;
    QueuesConstructor.Struct public control;
    mapping(uint256 => Queue.Struct) public queues;

    constructor(QueuesConstructor.Struct memory input) Whitelist(input.operators, input.targets) {
        control = input;
    }

    function setGlobalParameters(QueuesConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        updateWhitelist(globalParameters.operators, globalParameters.targets);
    }
    
    function queue(uint256 queueId) external view returns(Queue.Struct memory) {
        return queues[queueId];
    }

    function staminaCostOf(uint256 queueId) external view returns(uint32) {
        return queues[queueId].staminaCost;
    }

    function participantsOf(uint256 queueId) external view returns(uint256[] memory) {
        return queues[queueId].core.participants;
    }

    function enqueueDatesOf(uint256 queueId) external view returns(uint256[] memory) {
        return queues[queueId].core.enqueueDates;
    }

}

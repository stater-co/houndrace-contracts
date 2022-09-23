// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './Queue.sol';
import './Constructor.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/interfaces/IArena.sol';
import '../../arenas/interfaces/IArenaOwner.sol';
import '../../arenas/interfaces/IArenaFee.sol';
import '../../arenas/interfaces/IArenaCurrency.sol';
import '../../utils/Converters.sol';
import '../../payments/interfaces/IPay.sol';
import '../../payments/params/MicroPayment.sol';
import '../../hounds/interfaces/IUpdateHoundRunning.sol';
import '../../hounds/interfaces/IHoundOwner.sol';
import '../../hounds/interfaces/IHound.sol';
import '../../utils/Withdrawable.sol';
import '../../races/interfaces/IRaceStart.sol';
import '../../hounds/params/Hound.sol';
import '../interfaces/IEnqueueCost.sol';
import '../../incubator/interfaces/IGetIdentity.sol';
import '../../hounds/interfaces/IAllowance.sol';
import '../../firewall/Index.sol';


contract Params is Withdrawable, Firewall {
    
    event QueuesCreation(uint256 indexed idStart, uint256 indexed idStop, Queue.Struct[] newQueues);
    event DeleteQueue(uint256 indexed id);
    event PlayerEnqueue(uint256 indexed id, uint256 indexed hound, address indexed player);
    event EditQueue(uint256 indexed id, Queue.Struct queue);
    event QueueClosed(uint256 indexed id);
    event Unenqueue(uint256 indexed id, uint256 indexed hound);

    uint256 public id = 1;
    QueuesConstructor.Struct public control;
    mapping(uint256 => Queue.Struct) public queues;

    constructor(
        QueuesConstructor.Struct memory input
    ) 
        Firewall(input.firewall) 
    {
        control = input;
    }

    function setGlobalParameters(
        QueuesConstructor.Struct memory globalParameters
    ) 
        external 
        allowed(msg.sender,msg.sig)  
    {
        control = globalParameters;
    }
    
    function queue(
        uint256 theId
    ) 
        external 
        view 
        returns(Queue.Struct memory) 
    {
        return queues[theId];
    }

    function staminaCostOf(
        uint256 theId
    ) 
        external 
        view 
        returns(uint32) 
    {
        return queues[theId].staminaCost;
    }

    function participantsOf(
        uint256 theId
    ) 
        external 
        view 
        returns(uint256[] memory) 
    {
        return queues[theId].core.participants;
    }

    function enqueueDatesOf(
        uint256 theId
    ) 
        external 
        view 
        returns(uint256[] memory) 
    {
        return queues[theId].core.enqueueDates;
    }

}

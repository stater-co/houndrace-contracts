// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './Queue.sol';
import './Constructor.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/IIndex.sol';
import '../../utils/Converters.sol';
import '../../payments/IIndex.sol';
import '../../hounds/IIndex.sol';
import '../../utils/Withdrawable.sol';
import '../../races/IIndex.sol';
import '../../directives/IIndex.sol';


contract Params is Ownable, Withdrawable {
    
    event QueuesCreation(uint256 indexed idStart, uint256 indexed idStop, Queue.Struct[] newQueues);
    event DeleteQueue(uint256 indexed id);
    event PlayerEnqueue(uint256 indexed id, uint256 indexed hound, address indexed player);

    uint256 public id = 1;
    QueuesConstructor.Struct public control;
    mapping(uint256 => Queue.Struct) public queues;
    mapping(address => bool) public allowed;

    constructor(QueuesConstructor.Struct memory input, address[] memory allowedCallers) {
        control = input;
        handleAllowedCallers(allowedCallers);
    }

    function setGlobalParameters(QueuesConstructor.Struct memory globalParameters, address[] memory allowedCallers) external onlyOwner {
        control = globalParameters;
        handleAllowedCallers(allowedCallers);
    }
    
    function queue(uint256 theId) external view returns(Queue.Struct memory) {
        return queues[theId];
    }

    function enqueueCost(uint256 theId) public view returns(uint256) {
        return IArenas(control.arenas).arena(queues[theId].arena).fee / queues[theId].totalParticipants + queues[theId].entryFee + 1;
    }

    function handleAllowedCallers(address[] memory allowedCallers) internal {
        for ( uint256 i = 0 ; i < allowedCallers.length ; ++i ) {
            allowed[allowedCallers[i]] = !allowed[allowedCallers[i]];
        }
    }

    function participantsOf(uint256 theId) external view returns(uint256[] memory) {
        return queues[theId].participants;
    }

    fallback() external payable {}
    receive() external payable {}

}

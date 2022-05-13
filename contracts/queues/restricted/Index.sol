// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract QueuesRestricted is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory theQueues) external {
        Arena.Struct memory arena;
        for ( uint256 i = 0 ; i < theQueues.length ; ++i ) {
            arena = IArenas(control.arenas).arena(theQueues[i].arena);
            require(arena.fee < theQueues[i].entryFee / 2);
            require(arena.feeCurrency == theQueues[i].currency);
            queues[id] = theQueues[i];
            ++id;
        }
        emit QueuesCreation(id-theQueues.length,id-1,theQueues);
    }

    function deleteQueue(uint256 theId) external {
        for ( uint256 i = 0; i < queues[theId].participants.length; ++i ) {
            if ( queues[theId].participants[i] > 0 ) {
                IHounds(control.hounds).updateHoundRunning(
                    queues[theId].participants[i], 
                    true
                );
                IPayments(control.payments).rawSend{ 
                    value: queues[theId].currency == address(0) ? queues[theId].entryFee * queues[theId].totalParticipants : 0 
                }(
                    queues[theId].currency, 
                    queues[theId].entryFee, 
                    IHounds(control.hounds).houndOwner(queues[theId].participants[i])
                );
            }
        }
        delete queues[theId];
        emit DeleteQueue(theId);
    }

}

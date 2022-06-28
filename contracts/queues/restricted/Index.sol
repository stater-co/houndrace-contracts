// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract QueuesRestricted is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory theQueues) external {
        Arena.Struct memory arena;
        for ( uint256 i = 0 ; i < theQueues.length ; ++i ) {
            arena = IArena(control.arenas).arena(theQueues[i].arena);
            require(arena.fee < theQueues[i].entryFee / 2);
            require(arena.feeCurrency == theQueues[i].currency);
            require(theQueues[i].paymentsId > 0);
            require(theQueues[i].rewardsId > 0);
            
            Payment.Struct[] memory payments = IGetPayments(control.directives).getPayments(theQueues[i].paymentsId);
            for ( uint256 j = 0 ; j < payments.length ; ++j ) {
                require(payments[j].currency == theQueues[i].currency);
            }
            
            Reward.Struct[] memory rewards = IGetRewards(control.directives).getRewards(theQueues[i].rewardsId);
            for ( uint256 j = 0 ; j < rewards.length ; ++j ) {
                require(rewards[j].payment.currency == rewards[i].payment.currency);
            }

            queues[id] = theQueues[i];
            queues[id].participants = new uint256[](theQueues[i].participants.length);
            ++id;
        }

        emit QueuesCreation(id-theQueues.length,id-1,theQueues);
    }

    function editQueue(uint256 theId, Queue.Struct memory queue) external {
        Arena.Struct memory arena = IArena(control.arenas).arena(queue.arena);
        require(arena.fee < queue.entryFee / 2);
        queues[theId] = queue;
        emit EditQueue(theId,queues[theId]);
    }

    function closeQueue(uint256 theId) external {
        queues[theId].closed = true;
        emit QueueClosed(theId);
    }

    function deleteQueue(uint256 theId) external {
        for ( uint256 i = 0; i < queues[theId].participants.length; ++i ) {
            if ( queues[theId].participants[i] > 0 ) {
                require(IUpdateHoundRunning(control.hounds).updateHoundRunning(queues[theId].participants[i], theId) != 0);
                address houndOwner = IHoundOwner(control.hounds).houndOwner(queues[theId].participants[i]);
                ITransferTokens(control.payments).transferTokens{ 
                    value: queues[theId].currency == address(0) ? queues[theId].entryFee : 0 
                }(
                    queues[theId].currency, 
                    address(this),
                    houndOwner,
                    queues[theId].entryFee
                );
            }
        }
        delete queues[theId];
        emit DeleteQueue(theId);
    }

}

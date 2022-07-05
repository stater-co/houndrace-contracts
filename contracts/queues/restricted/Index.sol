// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract QueuesRestricted is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory theQueues) external {
        Arena.Struct memory arena;
        for ( uint256 i = 0 ; i < theQueues.length ; ++i ) {
            arena = IArena(control.arenas).arena(theQueues[i].arena);
            require(arena.fee < theQueues[i].entryFee / theQueues[i].totalParticipants);
            require(arena.feeCurrency == theQueues[i].currency);

            queues[id] = theQueues[i];
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
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = queues[theId].entryFee;

        for ( uint256 i = 0; i < queues[theId].participants.length; ++i ) {
            if ( queues[theId].participants[i] > 0 ) {
                require(IUpdateHoundRunning(control.hounds).updateHoundRunning(queues[theId].participants[i], theId) != 0);
                address houndOwner = IHoundOwner(control.hounds).houndOwner(queues[theId].participants[i]);

                IPay(control.payments).pay{
                    value: queues[theId].currency == address(0) ? queues[theId].entryFee : 0
                }(
                    address(this),
                    houndOwner,
                    queues[theId].currency,
                    new uint256[](0),
                    amounts,
                    queues[theId].currency == address(0) ? 3 : 2
                );
            }
        }
        delete queues[theId];
        emit DeleteQueue(theId);
    }

}

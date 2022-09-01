// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract QueuesRestricted is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory theQueues) external {
        uint256 arenaFee;
        for ( uint256 i = 0 ; i < theQueues.length ; ++i ) {
            arenaFee = IArenaFee(control.arenas).arenaFee(theQueues[i].core.arena);
            require(arenaFee < theQueues[i].core.entryFee / theQueues[i].totalParticipants);
            queues[id] = theQueues[i];
            ++id;
        }

        emit QueuesCreation(id-theQueues.length,id-1,theQueues);
    }

    function editQueue(uint256 theId, Queue.Struct memory queue) external {
        Arena.Struct memory arena = IArena(control.arenas).arena(queue.core.arena);
        require(arena.fee < queue.core.entryFee / 2);
        queues[theId] = queue;
        emit EditQueue(theId,queues[theId]);
    }

    function closeQueue(uint256 theId) external {
        queues[theId].closed = true;
        
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = queues[theId].core.entryFee;

        address arenaCurrency = IArenaCurrency(control.arenas).arenaCurrency(queues[theId].core.arena);

        for ( uint256 i = 0; i < queues[theId].core.participants.length; ++i ) {
            if ( queues[theId].core.participants[i] > 0 ) {
                require(IUpdateHoundRunning(control.hounds).updateHoundRunning(queues[theId].core.participants[i], theId) != 0);
                address houndOwner = IHoundOwner(control.hounds).houndOwner(queues[theId].core.participants[i]);

                IPay(control.payments).pay{
                    value: arenaCurrency == address(0) ? queues[theId].core.entryFee : 0
                }(
                    address(this),
                    houndOwner,
                    arenaCurrency,
                    new uint256[](0),
                    amounts,
                    arenaCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
                );
            }
        }

        emit QueueClosed(theId);
    }

    function deleteQueue(uint256 theId) external {
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = queues[theId].core.entryFee;

        address arenaCurrency = IArenaCurrency(control.arenas).arenaCurrency(queues[theId].core.arena);

        for ( uint256 i = 0; i < queues[theId].core.participants.length; ++i ) {
            if ( queues[theId].core.participants[i] > 0 ) {
                require(IUpdateHoundRunning(control.hounds).updateHoundRunning(queues[theId].core.participants[i], theId) != 0);
                address houndOwner = IHoundOwner(control.hounds).houndOwner(queues[theId].core.participants[i]);

                IPay(control.payments).pay{
                    value: arenaCurrency == address(0) ? queues[theId].core.entryFee : 0
                }(
                    address(this),
                    houndOwner,
                    arenaCurrency,
                    new uint256[](0),
                    amounts,
                    arenaCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
                );
            }
        }
        delete queues[theId];
        emit DeleteQueue(theId);
    }

}

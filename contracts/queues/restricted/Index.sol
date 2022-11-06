// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract QueuesRestricted is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function createQueues(
        Queue.Struct[] memory createdQueues
    ) 
        external 
        whitelisted 
    {
        uint256 arenaFee;
        for ( uint256 i = 0 ; i < createdQueues.length ; ++i ) {
            arenaFee = IArenaFee(control.arenas).arenaFee(createdQueues[i].core.arena);
            require(arenaFee < createdQueues[i].core.entryFee / createdQueues[i].totalParticipants);
            queues[id] = createdQueues[i];
            ++id;
        }

        emit QueuesCreation(id-createdQueues.length,id-1,createdQueues);
    }

    function editQueue(
        uint256 queueId, 
        Queue.Struct memory queue
    ) 
        external 
        whitelisted 
    {
        uint256 arenaFee = IArenaFee(control.arenas).arenaFee(queue.core.arena);
        require(arenaFee < queue.core.entryFee / queue.totalParticipants);
        queues[queueId] = queue;
        emit EditQueue(queueId,queues[queueId]);
    }

    function closeQueue(
        uint256 queueId
    ) 
        external 
        whitelisted 
    {
        queues[queueId].closed = true;
        
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = queues[queueId].core.entryFee;

        address arenaCurrency = IArenaCurrency(control.arenas).arenaCurrency(queues[queueId].core.arena);

        for ( uint256 i = 0; i < queues[queueId].core.participants.length; ++i ) {
            if ( queues[queueId].core.participants[i] > 0 ) {
                require(IUpdateHoundRunning(control.hounds).updateHoundRunning(queues[queueId].core.participants[i], queueId) != 0);
                address houndOwner = IHoundOwner(control.hounds).houndOwner(queues[queueId].core.participants[i]);

                IPay(control.payments).pay{
                    value: arenaCurrency == address(0) ? queues[queueId].core.entryFee : 0
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

        emit QueueClosed(queueId);
    }

}

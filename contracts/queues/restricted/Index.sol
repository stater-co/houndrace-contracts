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
        uint256 platformAndArenaFee;
        for ( uint256 i = 0 ; i < createdQueues.length ; ++i ) {
            platformAndArenaFee = IPlatformAndArenaFee(control.arenas).platformAndArenaFee(createdQueues[i].core.arena);
            require(platformAndArenaFee < createdQueues[i].core.raceEntryTicket / createdQueues[i].totalParticipants);
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
        amounts[0] = queues[queueId].core.raceEntryTicket;

        address arenaCurrency = IPlatformAndArenaFeeCurrency(control.arenas).platformAndArenaFeeCurrency(queues[queueId].core.arena);

        for ( uint256 i = 0; i < queues[queueId].core.participants.length; ++i ) {
            if ( queues[queueId].core.participants[i] > 0 ) {
                address houndOwner = IHoundOwner(control.hounds).houndOwner(queues[queueId].core.participants[i]);
                IUpdateHoundRunning(control.hounds).updateHoundRunning(queues[queueId].core.participants[i], 0);

                IPay(control.payments).pay{
                    value: arenaCurrency == address(0) ? queues[queueId].core.raceEntryTicket : 0
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

        uint256[] memory empty;
        queues[queueId].core.participants = empty;
        queues[queueId].core.enqueueDates = empty;

        emit QueueClosed(queueId);
    }

}

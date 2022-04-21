// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function createQueues(Queue.Struct[] memory theQueues) external {
        Arena.Struct memory arena;
        for ( uint256 i = 0 ; i < theQueues.length ; ++i ) {
            arena = IArenasZerocost(control.arenas).arena(theQueues[i].arena);
            require(arena.fee < theQueues[i].entryFee / 2);
            queues[id] = theQueues[i];
            ++id;
        }
        emit QueuesCreation(id-theQueues.length,id-1,theQueues);
    }

    function deleteQueue(uint256 theId) external {
        for ( uint256 i = 0; i < queues[theId].totalParticipants; ++i ) {
            if ( queues[theId].participants[i] > 0 ) {
                quitQueue
            }
        }
        delete queues[theId];
        emit DeleteQueue(theId);
    }

    function uploadRace(Race.Struct memory race, Payment.Struct[] memory payments) external {
        races[id] = race;
        IPaymentsMethods(control.payments).sendHardcodedPayments(payments);
        emit UploadRace(id, race);
        ++id;
    }

}

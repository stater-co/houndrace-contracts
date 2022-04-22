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
        console.log("ok 1");
        for ( uint256 i = 0; i < queues[theId].participants.length; ++i ) {
            console.log("ok 2");
            if ( queues[theId].participants[i] > 0 ) {
                console.log("ok 4");
                IPaymentsMethods(control.payments).rawSend(
                    queues[theId].currency, 
                    queues[theId].entryFee, 
                    IHoundsZerocost(control.hounds).ownerOf(queues[theId].participants[i])
                );
            }
        }
        console.log("ok 5");
        delete queues[theId];
        console.log("ok 6");
        emit DeleteQueue(theId);
    }

    function uploadRace(Race.Struct memory race, Payment.Struct[] memory payments) external {
        races[id] = race;
        IPaymentsMethods(control.payments).sendHardcodedPayments(payments);
        emit UploadRace(id, race);
        ++id;
    }

}

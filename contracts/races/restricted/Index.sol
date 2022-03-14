// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../../utils/Converters.sol';
import '../../payments/methods/IIndex.sol';
import '../params/Constructor.sol';
import '../params/Queue.sol';
import '../params/Race.sol';
import '../params/Index.sol';


contract RacesRestricted is Params {

    function setGlobalParameters(RacesConstructor.Struct memory input) external {
        control = input;
    }

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

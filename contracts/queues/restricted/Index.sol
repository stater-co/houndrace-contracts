// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract QueuesRestricted is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

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
        address houndOwner;
        for ( uint256 i = 0; i < queues[theId].participants.length; ++i ) {
            if ( queues[theId].participants[i] > 0 ) {
                houndOwner = IHoundsZerocost(control.hounds).ownerOf(queues[theId].participants[i]);
                (bool success, ) = control.payments.delegatecall(
                    abi.encodeWithSignature(
                        "rawSend(address,uint256,address)",
                        queues[theId].currency, 
                        queues[theId].entryFee, 
                        houndOwner
                    )
                );
                require(success);
            }
        }
        delete queues[theId];
        emit DeleteQueue(theId);
    }

}

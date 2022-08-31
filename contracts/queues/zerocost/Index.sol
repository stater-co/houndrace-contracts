// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Constructor.sol';
import '../../payments/params/MicroPayment.sol';
import '../../arenas/interfaces/IArenaFee.sol';
import '../../arenas/interfaces/IArenaCurrency.sol';
import '../params/Queue.sol';
import '../interfaces/IQueue.sol';

contract QueuesZerocost {

    QueuesConstructor.Struct public control;
    constructor(QueuesConstructor.Struct memory input) {}

    function enqueueCost(uint256 id) external view returns(
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory
    ) {

        Queue.Struct memory queue = IQueue(control.queues).queue(id);

        return (

            // Alpha Dune fee
            MicroPayment.Struct(
                queue.feeCurrency,
                ( queue.fee / queue.totalParticipants ) + queue.totalParticipants 
            ),

            // Arena fee 
            MicroPayment.Struct(
                IArenaCurrency(control.arenas).arenaCurrency(queue.arena),
                ( IArenaFee(control.arenas).arenaFee(queue.arena) / queue.totalParticipants ) + queue.totalParticipants + queue.entryFee
            ),

            // Entry fee 
            MicroPayment.Struct(
                queue.entryFeeCurrency,
                queue.entryFee
            )

        );
    }

}

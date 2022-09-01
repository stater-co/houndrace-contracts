// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../params/Constructor.sol';
import '../../payments/params/MicroPayment.sol';
import '../../arenas/interfaces/IArenaFee.sol';
import '../../arenas/interfaces/IArenaCurrency.sol';
import '../params/Queue.sol';
import '../interfaces/IQueue.sol';

contract QueuesZerocost is Ownable {

    QueuesConstructor.Struct public control;
    constructor(QueuesConstructor.Struct memory input) {}

    function setGlobalParameters(QueuesConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function enqueueCost(uint256 id) external view returns(
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory
    ) {

        Queue.Struct memory queue = IQueue(control.queues).queue(id);

        return (

            // Alpha Dune fee
            MicroPayment.Struct(
                queue.core.feeCurrency,
                ( queue.core.fee / queue.totalParticipants ) + queue.totalParticipants 
            ),

            // Arena fee 
            MicroPayment.Struct(
                IArenaCurrency(control.arenas).arenaCurrency(queue.core.arena),
                ( IArenaFee(control.arenas).arenaFee(queue.core.arena) / queue.totalParticipants ) + queue.totalParticipants + queue.core.entryFee
            ),

            // Entry fee 
            MicroPayment.Struct(
                queue.core.entryFeeCurrency,
                queue.core.entryFee
            )

        );
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Constructor.sol';
import '../../payments/params/MicroPayment.sol';
import '../../arenas/interfaces/IArenaFee.sol';
import '../../arenas/interfaces/IArenaCurrency.sol';
import '../params/Queue.sol';
import '../interfaces/IQueue.sol';
import '../../firewall/Index.sol';

contract QueuesZerocost is Firewall {

    QueuesConstructor.Struct public control;
    constructor(
        QueuesConstructor.Struct memory input
    ) 
        Firewall(input.firewall) 
    {

    }

    function setGlobalParameters(
        QueuesConstructor.Struct memory globalParameters
    ) 
        external 
        allowed(msg.sender,msg.sig) 
    {
        control = globalParameters;
    }

    function enqueueCost(
        uint256 id
    ) 
        external 
        view 
        returns(
            MicroPayment.Struct memory, 
            MicroPayment.Struct memory, 
            MicroPayment.Struct memory
        ) 
    {

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

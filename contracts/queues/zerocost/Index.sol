// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../params/Constructor.sol';
import '../../payments/params/MicroPayment.sol';
import '../../arenas/interfaces/IPlatformAndArenaFee.sol';
import '../../arenas/interfaces/IPlatformAndArenaFeeCurrency.sol';
import '../params/Queue.sol';
import '../interfaces/IQueue.sol';

contract QueuesZerocost is Ownable {

    QueuesConstructor.Struct public control;
    constructor(QueuesConstructor.Struct memory input) {}

    function setGlobalParameters(QueuesConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function getEnqueueCost(uint256 id) external view returns(
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
                IPlatformAndArenaFeeCurrency(control.arenas).platformAndArenaFeeCurrency(queue.core.arena),
                ( IPlatformAndArenaFee(control.arenas).platformAndArenaFee(queue.core.arena) / queue.totalParticipants ) + queue.totalParticipants
            ),

            // Entry fee 
            MicroPayment.Struct(
                queue.core.raceEntryTicketCurrency,
                queue.core.raceEntryTicket
            )

        );
    }

}

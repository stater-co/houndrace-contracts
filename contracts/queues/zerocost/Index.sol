// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract QueuesZerocost is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function enqueueCost(uint256 theId) external view returns(EnqueueCost.Struct memory, EnqueueCost.Struct memory, EnqueueCost.Struct memory) {
        return (

            // Alpha Dune fee
            EnqueueCost.Struct(
                queues[theId].feeCurrency,
                ( queues[theId].fee / queues[theId].totalParticipants ) + queues[theId].totalParticipants 
            ),

            // Arena fee 
            EnqueueCost.Struct(
                IArenaCurrency(control.arenas).arenaCurrency(queues[theId].arena),
                ( IArena(control.arenas).arena(queues[theId].arena).fee / queues[theId].totalParticipants ) + queues[theId].totalParticipants + queues[theId].entryFee
            ),

            // Entry fee 
            EnqueueCost.Struct(
                queues[theId].entryFeeCurrency,
                queues[theId].entryFee
            )

        );
    }

    fallback() external payable {}
    receive() external payable {}

}

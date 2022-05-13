// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function enqueue(uint256 theId, uint256 hound) external payable {

        require(
            ( 
                queues[theId].totalParticipants > 0 
            ) && ( (
                    queues[theId].endDate == 0 && queues[theId].startDate == 0
                ) || (
                    queues[theId].startDate <= block.timestamp && 
                    queues[theId].endDate >= block.timestamp
                )
            ) && (
                queues[theId].currency == IArenas(control.arenas).arena(queues[theId].arena).feeCurrency
            ) && (
                queues[theId].currency == address(0) && 
                msg.value >= enqueueCost(theId) || true
            )
        );

        queues[theId].participants.push(hound);
        IHounds(control.hounds).updateHoundStamina(hound);
        require(
                !IHounds(control.hounds).updateHoundRunning(theId, true) 
            && 
                queues[theId].participants[queues[theId].totalParticipants] == 0
        );

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            Arena.Struct memory arena = IArenas(control.arenas).arena(queues[theId].arena);

            IPayments(control.payments).transferTokens{
                value: arena.fee
            }(
                arena.feeCurrency,
                address(this),
                payable(IArenas(control.arenas).arenaOwner(queues[theId].arena)),
                arena.fee
            );

            IRacesMethods(control.races).raceStart(queues[theId]);

            delete queues[theId].participants;

        }
    
        emit PlayerEnqueue(theId,hound,msg.sender);
    }

}
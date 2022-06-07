// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input, address[] memory allowedCallers) Params(input, allowedCallers) {}

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
                queues[theId].currency == IArena(control.arenas).arena(queues[theId].arena).feeCurrency
            ) && (
                    ( queues[theId].currency == address(0) && msg.value >= enqueueCost(theId) ) 
                || 
                    true
            )
        );

        queues[theId].participants.push(hound);

        console.log("Before error");

        IUpdateHoundStamina(control.hounds).updateHoundStamina(hound);

        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, theId) == 0);

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            this.onBeforeRace{ value: msg.value }(theId);

            IRaceStart(control.races).raceStart(queues[theId], theId);

            delete queues[theId].participants;

        }
    
        emit PlayerEnqueue(theId,hound,msg.sender);
    }

    function onBeforeRace(uint256 theId) public payable {
        require(allowed[msg.sender]);
        Arena.Struct memory arena = IArena(control.arenas).arena(queues[theId].arena);
        address arenaOwner = IArenaOwner(control.arenas).arenaOwner(queues[theId].arena);
        ITransferTokens(control.payments).transferTokens{
            value: msg.value
        }(
            arena.feeCurrency,
            address(this),
            arenaOwner,
            arena.fee
        );

        Payment.Struct[] memory payments = IGetPayments(control.directives).getPayments(queues[theId].paymentsId);
        Reward.Struct[] memory rewards = IGetRewards(control.directives).getRewards(queues[theId].rewardsId);

        for ( uint256 i = 0 ; i < payments.length ; ++i ) {
            IRunPayment(control.payments).runPayment(payments[i]);
        }

        for ( uint256 i = 0 ; i < rewards.length ; ++i ) {
            IRunPayment(control.payments).runPayment(rewards[i].payment);
        }

    }

}
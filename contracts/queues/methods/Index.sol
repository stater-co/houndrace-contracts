// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input, address[] memory allowedCallers) Params(input, allowedCallers) {}

    function enqueue(uint256 theId, uint256 hound) external payable {

        console.log("in enqueue");
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
                    ( queues[theId].currency == address(0) && msg.value >= enqueueCost(theId) ) 
                || 
                    true
            )
        );

        console.log("in enqueue x2");

        queues[theId].participants.push(hound);
        console.log("in enqueue x2.1 ", hound, control.hounds);

        IHounds(control.hounds).updateHoundStamina(hound);
        console.log("in enqueue x2.2 ", theId);

        require(!IHounds(control.hounds).updateHoundRunning(hound, true));

        console.log("in enqueue x3");

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            console.log("in enqueue x3.1");
            this.onBeforeRace(theId);

            console.log("in enqueue x3.2");
            IRaces(control.races).raceStart(queues[theId], theId);

            console.log("in enqueue x3.2");
            delete queues[theId].participants;

        }

        console.log("in enqueue x4");
    
        emit PlayerEnqueue(theId,hound,msg.sender);
    }

    function onBeforeRace(uint256 theId) public payable {
        console.log("= > ", allowed[msg.sender], msg.sender, queues[theId].arena);
        console.log(address(this));
        require(allowed[msg.sender]);
        Arena.Struct memory arena = IArenas(control.arenas).arena(queues[theId].arena);
        console.log("ok so >> ", control.arenas, arena.fee);
        address arenaOwner = IArenas(control.arenas).arenaOwner(queues[theId].arena);
        console.log(msg.value);
        console.log("ok so far");
        IPayments(control.payments).transferTokens{
            value: msg.value
        }(
            arena.feeCurrency,
            address(this),
            arenaOwner,
            arena.fee
        );

        Payment.Struct[] memory payments = IDirectives(control.directives).getPayments(queues[theId].paymentsId);
        Reward.Struct[] memory rewards = IDirectives(control.directives).getRewards(queues[theId].rewardsId);

        for ( uint256 i = 0 ; i < payments.length ; ++i ) {
            IPayments(control.payments).runPayment(payments[i]);
        }

        for ( uint256 i = 0 ; i < rewards.length ; ++i ) {
            IPayments(control.payments).runPayment(rewards[i].payment);
        }
    }

}
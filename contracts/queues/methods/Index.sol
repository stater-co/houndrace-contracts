// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function unenqueue(uint256 theId, uint256 hound) external {
        Hound.Struct memory houndObj = IHound(control.hounds).hound(hound);
        require(houndObj.queueId == theId);

        uint256[] memory replacedParticipants = queues[theId].participants;
        delete queues[theId].participants;

        bool exists;
        for ( uint256 i = 0 ; i < replacedParticipants.length ; ++i ) {
            if ( replacedParticipants[i] == hound ) {
                exists = true;
            } else {
                queues[theId].participants.push(queues[theId].participants[i]);
            }
        }
        require(exists);

    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        console.log("join queue 0");
        require(
            queues[theId].totalParticipants > 0 && !queues[theId].closed && 
            ((queues[theId].endDate == 0 && queues[theId].startDate ==0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp)) && 
            msg.value >= queues[theId].entryFee && 
            IHoundOwner(control.hounds).houndOwner(hound) == msg.sender
        );

        console.log("join queue 1");
        Hound.Struct memory houndObj = IHound(control.hounds).hound(hound);

        console.log("join queue 2");
        require(
            houndObj.queueId == 0 && 
            houndObj.breeding.secondsToMaturity + houndObj.identity.birthDate < block.timestamp
        );
        
        console.log("join queue 3");
        for ( uint256 i = 0 ; i < queues[theId].participants.length ; ++i ) {
            require(queues[theId].participants[i] != hound);
        }

        console.log("join queue 4");
        queues[theId].participants.push(hound);

        console.log("join queue 5");
        IUpdateHoundStamina(control.hounds).updateHoundStamina(hound);

        console.log("join queue 6");
        IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, theId);

        console.log("join queue 7");
        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            console.log("join queue 8");
            IRaceStart(control.races).raceStart(queues[theId], theId);

            delete queues[theId].participants;

        }
    
        console.log("join queue 9");
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
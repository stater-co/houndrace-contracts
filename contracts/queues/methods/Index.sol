// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function unenqueue(uint256 theId, uint256 hound) external {
        Hound.Struct memory houndObj = IHound(control.hounds).hound(hound);
        require(houndObj.queueId == theId);

        console.log("ok 1");
        uint256[] memory replacedParticipants = queues[theId].participants;
        delete queues[theId].participants;

        console.log("ok 2");
        bool exists;
        for ( uint256 i = 0 ; i < replacedParticipants.length ; ++i ) {
            console.log(replacedParticipants[i]);
            if ( replacedParticipants[i] == hound ) {
                exists = true;
            } else {
                queues[theId].participants.push(replacedParticipants[i]);
            }
        }
        require(exists);
        console.log("ok 3");

        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, 0) != 0);
        console.log("ok 4");
        address houndOwner = IHoundOwner(control.hounds).houndOwner(hound);
        console.log("ok 5");
        ITransferTokens(control.payments).transferTokens{ 
            value: queues[theId].currency == address(0) ? queues[theId].entryFee : 0 
        }(
            queues[theId].currency, 
            address(this),
            houndOwner,
            queues[theId].entryFee
        );
        console.log("ok 6");
        emit Unenqueue(theId, hound);
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

        console.log("join queue 6 ", hound, theId, control.hounds);
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
        console.log("## on before race");
        console.log(msg.sender);
        require(allowed[msg.sender]);

        console.log("###");
        Arena.Struct memory arena = IArena(control.arenas).arena(queues[theId].arena);

        console.log("####");
        address arenaOwner = IArenaOwner(control.arenas).arenaOwner(queues[theId].arena);

        console.log("#####");
        ITransferTokens(control.payments).transferTokens{
            value: msg.value
        }(
            arena.feeCurrency,
            address(this),
            arenaOwner,
            arena.fee
        );

        console.log("###### ..");
        console.log(msg.value);
        Payment.Struct[] memory payments = IGetPayments(control.directives).getPayments(queues[theId].paymentsId);
        Reward.Struct[] memory rewards = IGetRewards(control.directives).getRewards(queues[theId].rewardsId);

        console.log("####### ", control.payments);
        for ( uint256 i = 0 ; i < payments.length ; ++i ) {
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature("runPayment((address,address,address,uint256[],uint256,uint32,uint32,uint32))", payments[i])
            );
            require(success);
        }

        console.log("########");
        for ( uint256 i = 0 ; i < rewards.length ; ++i ) {
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature("runPayment((address,address,address,uint256[],uint256,uint32,uint32,uint32))", rewards[i].payment)
            );
            require(success);
        }

    }

}
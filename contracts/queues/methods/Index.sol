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
                queues[theId].participants.push(replacedParticipants[i]);
            }
        }
        require(exists);

        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, 0) != 0);
        address houndOwner = IHoundOwner(control.hounds).houndOwner(hound);
        ITransferTokens(control.payments).transferTokens{ 
            value: queues[theId].currency == address(0) ? queues[theId].entryFee : 0 
        }(
            queues[theId].currency, 
            address(this),
            houndOwner,
            queues[theId].entryFee
        );
        emit Unenqueue(theId, hound);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        require(
            queues[theId].totalParticipants > 0 && !queues[theId].closed && 
            ((queues[theId].endDate == 0 && queues[theId].startDate ==0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp)) && 
            msg.value >= queues[theId].entryFee && 
            IHoundOwner(control.hounds).houndOwner(hound) == msg.sender
        );

        Hound.Struct memory houndObj = IHound(control.hounds).hound(hound);

        require(
            houndObj.queueId == 0 && 
            houndObj.breeding.secondsToMaturity + houndObj.identity.birthDate < block.timestamp
        );
        
        for ( uint256 i = 0 ; i < queues[theId].participants.length ; ++i ) {
            require(queues[theId].participants[i] != hound);
        }

        queues[theId].participants.push(hound);

        IUpdateHoundStamina(control.hounds).updateHoundStamina(hound);
        IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, theId);

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            IRaceStart(control.races).raceStart(queues[theId], theId);

            delete queues[theId].participants;

        }
    
        emit PlayerEnqueue(theId,hound,msg.sender);
    }

    function onBeforeRace(uint256 theId) public payable {
        //require(allowed[msg.sender]);

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
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature("runPayment((address,address,address,uint256[],uint256,uint32,uint32,uint32))", payments[i])
            );
            require(success);
        }

        for ( uint256 i = 0 ; i < rewards.length ; ++i ) {
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature("runPayment((address,address,address,uint256[],uint256,uint32,uint32,uint32))", rewards[i].payment)
            );
            require(success);
        }

    }

}
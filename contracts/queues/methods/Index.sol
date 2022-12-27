// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function unenqueue(
        uint256 queueId, 
        uint256 hound
    ) 
        external 
        nonReentrant
    {
        address houndOwner = IHoundOwner(control.hounds).houndOwner(hound);
        require(houndOwner == msg.sender);

        uint256[] memory replacedParticipants = queues[queueId].core.participants;
        uint256[] memory replacedEnqueueDates = queues[queueId].core.enqueueDates;
        delete queues[queueId].core.participants;
        delete queues[queueId].core.enqueueDates;

        if ( replacedParticipants.length > 0 ) {
            bool exists;
            for ( uint256 i = 0 ; i < replacedParticipants.length ; ++i ) {
                if ( replacedParticipants[i] == hound ) {
                    exists = true;
                    require(replacedEnqueueDates[i] < block.timestamp - queues[queueId].cooldown);
                } else {
                    queues[queueId].core.participants.push(replacedParticipants[i]);
                    queues[queueId].core.enqueueDates.push(replacedEnqueueDates[i]);
                }
            }
            require(exists);
        }


        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, 0) == queueId);
        IRefreshStamina(control.hounds).refreshStamina(hound);

        
        ( , , MicroPayment.Struct memory raceEntryTicket) = IGetEnqueueCost(control.zerocost).getEnqueueCost(queueId);

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = raceEntryTicket.amount;

        IPay(control.payments).pay(
            control.payments,
            houndOwner,
            raceEntryTicket.currency,
            new uint256[](0),
            amounts,
            raceEntryTicket.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        emit Unenqueue(queueId, hound);
    }

    function enqueue(
        uint256 queueId, 
        uint256 hound
    ) 
        external 
        payable 
        nonReentrant 
    {

        require(
            queues[queueId].totalParticipants > 0 && !queues[queueId].closed && 
            ((queues[queueId].endDate == 0 && queues[queueId].startDate == 0) || (queues[queueId].startDate <= block.timestamp && queues[queueId].endDate >= block.timestamp)) && 
            IHoundOwner(control.hounds).houndOwner(hound) == msg.sender && 
            queues[queueId].lastCompletion < block.timestamp - queues[queueId].cooldown
        );

        Hound.Struct memory houndStruct = IHound(control.hounds).hound(hound);
        require(houndStruct.stamina.staminaValue >= queues[queueId].staminaCost);
        
        bool validSpecie = queues[queueId].speciesAllowed.length == 0;
        if ( !validSpecie ) {
            for ( uint256 i = 0 ; i < queues[queueId].speciesAllowed.length ; ++i ) {
                if ( queues[queueId].speciesAllowed[i] == houndStruct.identity.specie ) {
                    validSpecie = true;
                    break;
                }
            }
        }
        require(validSpecie);

        for ( uint256 i = 0 ; i < queues[queueId].core.participants.length ; ++i ) {
            require(queues[queueId].core.participants[i] != hound);
        }

        queues[queueId].core.participants.push(hound);
        queues[queueId].core.enqueueDates.push(block.timestamp);

        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, queueId) == 0);

        (
            MicroPayment.Struct memory startRaceTransactionFee, 
            MicroPayment.Struct memory platformAndArenaFee, 
            MicroPayment.Struct memory raceEntryTicket
        ) = IGetEnqueueCost(control.zerocost).getEnqueueCost(queueId);

        uint256[] memory amounts = new uint256[](1);
        
        amounts[0] = startRaceTransactionFee.amount;
        if ( amounts[0] > 0 ) {
            IPay(control.payments).pay{
                value: startRaceTransactionFee.currency == address(0) ? startRaceTransactionFee.amount : 0
            }(
                msg.sender,
                control.raceUploader,
                startRaceTransactionFee.currency,
                new uint256[](0),
                amounts,
                startRaceTransactionFee.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
            );
        }

        amounts[0] = platformAndArenaFee.amount;
        if ( amounts[0] > 0 ) {
            IPay(control.payments).pay{
                value: platformAndArenaFee.currency == address(0) ? platformAndArenaFee.amount : 0
            }(
                msg.sender,
                control.payments,
                platformAndArenaFee.currency,
                new uint256[](0),
                amounts,
                platformAndArenaFee.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
            );
        }

        amounts[0] = raceEntryTicket.amount;
        if ( amounts[0] > 0 ) {
            IPay(control.payments).pay{
                value: raceEntryTicket.currency == address(0) ? raceEntryTicket.amount : 0
            }(
                msg.sender,
                control.payments,
                raceEntryTicket.currency,
                new uint256[](0),
                amounts,
                raceEntryTicket.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
            );
        }

        IRefreshStamina(control.hounds).refreshStamina(hound);

        if ( queues[queueId].core.participants.length == queues[queueId].totalParticipants ) {

            IRaceStart(control.races).raceStart(queueId, queues[queueId]);

            delete queues[queueId].core.participants;
            delete queues[queueId].core.enqueueDates;

            queues[queueId].lastCompletion = block.timestamp;

        }
    
        emit PlayerEnqueue(queueId,hound,msg.sender);

    }

}
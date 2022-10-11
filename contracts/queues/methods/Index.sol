// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function unenqueue(
        uint256 theId, 
        uint256 hound
    ) 
        external 
        nonReentrant
    {
        address houndOwner = IHoundOwner(control.hounds).houndOwner(hound);
        require(houndOwner == msg.sender);

        uint256[] memory replacedParticipants = queues[theId].core.participants;
        uint256[] memory replacedEnqueueDates = queues[theId].core.enqueueDates;
        delete queues[theId].core.participants;
        delete queues[theId].core.enqueueDates;

        if ( replacedParticipants.length > 0 ) {
            bool exists;
            for ( uint256 i = 0 ; i < replacedParticipants.length ; ++i ) {
                if ( replacedParticipants[i] == hound ) {
                    exists = true;
                    require(replacedEnqueueDates[i] < block.timestamp - queues[theId].cooldown);
                } else {
                    queues[theId].core.participants.push(replacedParticipants[i]);
                    queues[theId].core.enqueueDates.push(replacedEnqueueDates[i]);
                }
            }
            require(exists);
        }


        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, 0) == theId);

        
        ( , , MicroPayment.Struct memory entryFee) = IEnqueueCost(control.zerocost).enqueueCost(theId);

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = entryFee.amount;

        IPay(control.payments).pay(
            control.payments,
            houndOwner,
            entryFee.currency,
            new uint256[](0),
            amounts,
            entryFee.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        emit Unenqueue(theId, hound);
    }

    function enqueue(
        uint256 theId, 
        uint256 hound
    ) 
        external 
        payable 
        nonReentrant 
    {
        require(
            queues[theId].totalParticipants > 0 && !queues[theId].closed && 
            ((queues[theId].endDate == 0 && queues[theId].startDate == 0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp)) && 
            IHoundOwner(control.hounds).houndOwner(hound) == msg.sender && 
            queues[theId].lastCompletion < block.timestamp - queues[theId].cooldown
        );

        Hound.Struct memory houndStruct = IHound(control.hounds).hound(hound);
        bool validSpecie;
        for ( uint256 i = 0 ; i < queues[theId].speciesAllowed.length ; ++i ) {
            if ( queues[theId].speciesAllowed[i] == houndStruct.identity.specie ) {
                validSpecie = true;
                break;
            }
        }
        require(validSpecie);

        for ( uint256 i = 0 ; i < queues[theId].core.participants.length ; ++i ) {
            require(queues[theId].core.participants[i] != hound);
        }

        queues[theId].core.participants.push(hound);
        queues[theId].core.enqueueDates.push(block.timestamp);

        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, theId) == 0);

        address arenaCurrency = IArenaCurrency(control.arenas).arenaCurrency(queues[theId].core.arena);

        (
            MicroPayment.Struct memory alphaduneFee, 
            MicroPayment.Struct memory arenaFee, 
            MicroPayment.Struct memory entryFee
        ) = IEnqueueCost(control.zerocost).enqueueCost(theId);

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = alphaduneFee.amount;

        IPay(control.payments).pay{
            value: alphaduneFee.currency == address(0) ? alphaduneFee.amount : 0
        }(
            msg.sender,
            control.payments,
            alphaduneFee.currency,
            new uint256[](0),
            amounts,
            arenaCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        amounts[0] = arenaFee.amount;
        IPay(control.payments).pay{
            value: arenaFee.currency == address(0) ? arenaFee.amount : 0
        }(
            msg.sender,
            control.payments,
            arenaFee.currency,
            new uint256[](0),
            amounts,
            arenaCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        amounts[0] = entryFee.amount;
        IPay(control.payments).pay{
            value: entryFee.currency == address(0) ? entryFee.amount : 0
        }(
            msg.sender,
            control.payments,
            entryFee.currency,
            new uint256[](0),
            amounts,
            arenaCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );


        if ( queues[theId].core.participants.length == queues[theId].totalParticipants ) {

            IRaceStart(control.races).raceStart(theId, queues[theId]);

            delete queues[theId].core.participants;
            delete queues[theId].core.enqueueDates;

            queues[theId].lastCompletion = block.timestamp;

        }
    
        emit PlayerEnqueue(theId,hound,msg.sender);

    }

}
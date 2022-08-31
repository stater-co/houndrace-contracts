// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract QueuesMethods is Params {

    constructor(QueuesConstructor.Struct memory input) Params(input) {}

    function unenqueue(uint256 theId, uint256 hound) external {
        address houndOwner = IHoundOwner(control.hounds).houndOwner(hound);
        require(houndOwner == msg.sender);

        uint256[] memory replacedParticipants = queues[theId].participants;
        uint256[] memory replacedEnqueueDates = queues[theId].enqueueDates;
        delete queues[theId].participants;
        delete queues[theId].enqueueDates;

        if ( replacedParticipants.length > 0 ) {
            bool exists;
            for ( uint256 i = 0 ; i < replacedParticipants.length ; ++i ) {
                if ( replacedParticipants[i] == hound ) {
                    exists = true;
                    require(replacedEnqueueDates[i] < block.timestamp - queues[theId].cooldown);
                } else {
                    queues[theId].participants.push(replacedParticipants[i]);
                    queues[theId].enqueueDates.push(replacedEnqueueDates[i]);
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
            entryFee.currency == address(0) ? 3 : 2
        );

        emit Unenqueue(theId, hound);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        require(
            queues[theId].totalParticipants > 0 && !queues[theId].closed && 
            ((queues[theId].endDate == 0 && queues[theId].startDate == 0) || (queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp)) && 
            IHoundOwner(control.hounds).houndOwner(hound) == msg.sender && 
            queues[theId].lastCompletion < block.timestamp - queues[theId].cooldown
        );

        for ( uint256 i = 0 ; i < queues[theId].participants.length ; ++i ) {
            require(queues[theId].participants[i] != hound);
        }

        queues[theId].participants.push(hound);
        queues[theId].enqueueDates.push(block.timestamp);

        IUpdateHoundStamina(control.hounds).updateHoundStamina(hound);

        require(IUpdateHoundRunning(control.hounds).updateHoundRunning(hound, theId) == 0);

        address arenaCurrency = IArenaCurrency(control.arenas).arenaCurrency(queues[theId].arena);


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
            arenaCurrency == address(0) ? 3 : 2
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
            arenaCurrency == address(0) ? 3 : 2
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
            arenaCurrency == address(0) ? 3 : 2
        );


        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            IHandleArenaUsage(control.arenas).handleArenaUsage(queues[theId].arena);

            IHandleRaceLoot(control.races).handleRaceLoot(
                queues[theId].payments
            );

            IRaceStart(control.races).raceStart(queues[theId], theId);

            delete queues[theId].participants;
            delete queues[theId].enqueueDates;

            queues[theId].lastCompletion = block.timestamp;

        }
    
        emit PlayerEnqueue(theId,hound,msg.sender);

    }

}
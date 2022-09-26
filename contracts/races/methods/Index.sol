// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(
        RacesConstructor.Struct memory input
    ) 
        Params(input) 
    {
        
    }

    function raceStart(
        uint256 queueId,
        Queue.Struct memory queue
    ) 
        external 
    {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));

        if ( control.callable ) {

            IHandleArenaUsage(control.arenas).handleArenaUsage(queue.core.arena);

            IHandleRaceLoot(control.races).handleRaceLoot(queue.core.payments);

            races[id] = IGenerate(control.generator).generate(queue,queueId);

            for ( uint256 i = 0 ; i < queue.core.participants.length ; ++i ) {
                require(IUpdateHoundRunning(control.hounds).updateHoundRunning(queue.core.participants[i], queueId) != 0);
                IUpdateHoundStamina(control.hounds).updateHoundStamina(queue.core.participants[i], queue.staminaCost);
            }

            emit NewFinishedRace(id, queueId, races[id]);

        } else {

            emit NewRace(id, queueId, Race.Struct(
                Core.Struct(
                    queue.core.name,
                    queue.core.feeCurrency,
                    queue.core.entryFeeCurrency,
                    queue.core.participants,
                    queue.core.enqueueDates,
                    queue.core.arena,
                    queue.core.entryFee,
                    queue.core.fee,
                    queue.core.payments
                ),
                block.timestamp,
                queueId,
                '0x00'
            ));

        }

        ++id;

    }

    function handleRaceLoot(
        Payment.Struct memory payment
    ) 
        public 
        payable 
    {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));

        for ( uint256 i = 0 ; i < payment.from.length ; ++i ) {
            IPay(control.payments).pay(
                payment.from[i],
                payment.to[i],
                payment.currency[i],
                payment.ids[i],
                payment.amounts[i],
                payment.paymentType[i]
            );
        }

    }

}

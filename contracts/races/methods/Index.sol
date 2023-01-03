// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(
        uint256 queueId,
        Queue.Struct memory queue
    ) 
        external 
        whitelisted 
    {

        emit NewRace(id, queueId, Race.Struct(
            Core.Struct(
                queue.core.name,
                queue.core.feeCurrency,
                queue.core.raceEntryTicketCurrency,
                queue.core.participants,
                queue.core.enqueueDates,
                queue.core.arena,
                queue.core.raceEntryTicket,
                queue.core.fee
            ),
            queueId,
            0,
            '0x00',
            Payment.Struct(
                new address[](0),
                new address[](0),
                new address[](0),
                new uint256[][](0),
                new uint256[][](0),
                new Payment.PaymentTypes[](0)
            )
        ));

        ++id;

    }

    function handleRaceLoot(
        Payment.Struct memory payment
    ) 
        public 
        payable 
        whitelisted 
    {

        for ( uint256 i = 0 ; i < payment.from.length ; ++i ) {
            if ( payment.amounts[i][0] > 0 ) {
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

}

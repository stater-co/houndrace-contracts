// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(
        uint256 queueId,
        Queue.Struct memory queue
    ) external {
        require(allowed[msg.sender]);

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
            queueId,
            '0x00'
        ));

        ++id;

    }

    function handleRaceLoot(
        Payment.Struct memory payment
    ) public payable {
        require(allowed[msg.sender]);

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

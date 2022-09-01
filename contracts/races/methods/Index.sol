// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        require(allowed[msg.sender]);

        if ( control.callable ) {

            races[id] = IGenerate(control.generator).generate(queue,theId);

            for ( uint256 i = 0 ; i < queue.core.participants.length ; ++i ) {
                require(IUpdateHoundRunning(control.hounds).updateHoundRunning(queue.core.participants[i], theId) != 0);
            }

            emit NewFinishedRace(id, races[id]);

        } else {

            emit NewRace(id, Race.Struct(
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
                theId,
                '0x00'
            ));

        }

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

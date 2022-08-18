// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        require(allowed[msg.sender]);

        if ( control.callable ) {

            races[id] = IGenerate(control.generator).generate(queue,theId);

            for ( uint256 i = 0 ; i < queue.participants.length ; ++i ) {
                require(IUpdateHoundRunning(control.hounds).updateHoundRunning(queue.participants[i], theId) != 0);
            }

            emit NewFinishedRace(id, races[id]);

        } else {

            emit NewRace(id, Race.Struct(
                queue.name,
                IArenaCurrency(control.arenas).arenaCurrency(queue.arena),
                queue.participants,
                queue.arena,
                queue.entryFee,
                0,
                queue.payments, // payments to be filled
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
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature(
                    "pay(address,address,address,uint256[],uint256[],uint32)", 
                    payment.from[i],
                    payment.to[i],
                    payment.currency[i],
                    payment.ids[i],
                    payment.amounts[i],
                    payment.paymentType[i]
                )
            );
            require(success);
        }

    }

}

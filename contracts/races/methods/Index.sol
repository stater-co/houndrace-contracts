// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue) external payable {
        if ( control.callable ) {
            
            Payment.Struct[] memory payments = IPayments(control.payments).getPayments(queue.rewardsId);

            uint256 ethToSend = 0;

            races[id] = IGenerator(control.generator).generate(queue);

            for ( uint256 i = 0 ; i < races[id].participants.length ; ++i ) {
                IHounds(control.hounds).updateHoundRunning(races[id].participants[i], 0);
            }

            // custom ERC20 / ERC721 / ERC1155 will be sent to the contract that makes the transfer, to avoid code complications
            for ( uint256 i = 0 ; i < payments.length ; ++i ) {
                if ( payments[i].currency == address(0) ) {
                    if ( payments[i].paymentType == 3 ) {
                        payments[i].qty = msg.value / 100 * payments[i].percentageWon;
                        payments[i].to = payable(IHounds(control.hounds).houndOwner(races[id].participants[payments[i].place]));
                        ethToSend += payments[i].qty;
                    } else {
                        ethToSend += payments[i].qty;
                    }
                }
            }

            require(queue.entryFee * queue.totalParticipants <= msg.value);

            IPayments(control.payments).sendHardcodedPayments{ value: ethToSend }(payments);

            emit NewFinishedRace(id,  races[id]);

            ++id;

        } else {

            require(payable(control.staterApi).send(msg.value));
            emit NewRace(id, Race.Struct(
                queue.name,
                queue.currency,
                queue.participants,
                queue.arena,
                queue.entryFee,
                queue.rewardsId,
                0,
                '0x00'
            ));

        }

    }

}

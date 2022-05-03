// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue) external payable {
        if ( control.callable ) {
            
            console.log("The sender is: ", msg.sender, ", ", msg.value);
            console.log("Race start with reward id: ", queue.rewardsId);
            
            Payment.Struct[] memory payments = IPayments(control.payments).getPayments(queue.rewardsId);

            uint256 ethToSend = 0;

            console.log("Total payments found: ", payments.length);

            races[id] = IGenerator(control.generator).generate(queue);
            console.log("Race start here, 4");

            // custom ERC20 / ERC721 / ERC1155 will be sent to the contract that makes the transfer, to avoid code complications
            for ( uint256 i = 0 ; i < payments.length ; ++i ) {
                console.log("Check payment: ", i);
                if ( payments[i].currency == address(0) ) {
                    console.log("OK .");
                    if ( payments[i].paymentType == 3 ) {
                        console.log("OK ..");
                        payments[i].qty = msg.value / 100 * payments[i].percentageWon;
                        // payments[i].to = payable(IHounds(control.hounds).houndOwner(races[id].participants[payments[i].place]));
                        ethToSend += payments[i].qty;
                        console.log("ETH to send in progress: ", ethToSend);
                    } else {
                        ethToSend += payments[i].qty;
                    }
                }
            }

            console.log("ETH to send: ", ethToSend);

            require(queue.entryFee * queue.totalParticipants <= msg.value);

            IPayments(control.payments).sendHardcodedPayments{ value: ethToSend }(payments);

            emit NewFinishedRace(id,  races[id]);

        } else {

            emit NewRace(id, races[id]);

        }

        console.log("Race start here, 5");

        ++id;

    }

}

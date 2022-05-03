// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue) external payable {
        if ( control.callable ) {
            
            console.log("The sender is: ", msg.sender);
            console.log("Race start with reward id: ", queue.rewardsId);
            
            Payment.Struct[] memory payments = IPayments(control.payments).getPayments(queue.rewardsId);

            uint256 ethToSend = 0;

            console.log("Total payments found: ", payments.length);

            // custom ERC20 / ERC721 / ERC1155 will be sent to the contract that makes the transfer, to avoid code complications
            for ( uint256 i = 0 ; i < payments.length ; ++i ) {
                if ( payments[i].currency == address(0) ) {
                    if ( payments[i].paymentType == 3 ) {
                        ethToSend += msg.value / 100 * payments[i].percentageWon;
                    }
                    ethToSend += payments[i].qty;
                }
            }

            races[id] = IGenerator(control.generator).generate{ value: msg.value }(queue);
            console.log("Race start here, 4");

            emit NewFinishedRace(id,  races[id]);

        } else {

            emit NewRace(id, races[id]);

        }

        console.log("Race start here, 5");

        ++id;

    }

}

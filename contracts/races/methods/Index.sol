// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue) external {
        if ( control.callable ) {

            uint256 ethToSend = 0;

            races[id] = IGenerator(control.generator).generate(queue);

            require(queue.entryFee * queue.totalParticipants <= msg.value);

            emit NewFinishedRace(id, races[id]);

        } else {

            require(payable(control.staterApi).send(msg.value));
            emit NewRace(id, races[id]);

        }

        ++id;

    }

}

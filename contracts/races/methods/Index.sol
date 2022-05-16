// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue) external {
        require(allowed[msg.sender]);
        if ( control.callable ) {

            races[id] = IGenerator(control.generator).generate(queue,races[id].queueId);

            IQueues(control.queues).onBeforeRace(races[id].queueId);

            emit NewFinishedRace(id, races[id]);

        } else {

            emit NewRace(id, races[id]);

        }

        ++id;
    }

}

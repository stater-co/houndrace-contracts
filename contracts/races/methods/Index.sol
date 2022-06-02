// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        require(allowed[msg.sender]);
        if ( control.callable ) {

            races[id] = IGenerate(control.generator).generate(queue,theId);

            IOnBeforeRace(control.queues).onBeforeRace(races[id].queueId);

            emit NewFinishedRace(id, races[id]);

        } else {

            emit NewRace(id, races[id]);

        }

        ++id;
    }

}

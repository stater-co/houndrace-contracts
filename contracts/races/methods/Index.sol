// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue) external {
        if ( control.callable ) {

            races[id] = IGenerator(control.generator).generate(queue);

            emit NewFinishedRace(id, races[id]);

        } else {

            emit NewRace(id, races[id]);

        }

        ++id;
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        console.log("Race start here");
        console.log(allowed[msg.sender]);
        require(allowed[msg.sender]);
        console.log(control.callable);
        if ( control.callable ) {

            console.log("Generate");
            races[id] = IGenerate(control.generator).generate(queue,theId);

            console.log("Generate on before race ", control.queues);
            IOnBeforeRace(control.queues).onBeforeRace(races[id].queueId);

            console.log("Emit");
            emit NewFinishedRace(id, races[id]);

        } else {

            console.log("Emit new race");
            emit NewRace(id, races[id]);

        }

        ++id;
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        console.log("ok ... 1");
        require(allowed[msg.sender]);
        if ( control.callable ) {

            console.log("ok ... 2 ", control.generator, theId);
            races[id] = IGenerator(control.generator).generate(queue,theId);

            console.log("ok ... 2 ...");
            IQueues(control.queues).onBeforeRace(races[id].queueId);

            console.log("ok ... 2 .....");
            emit NewFinishedRace(id, races[id]);

        } else {

            console.log("ok ... 3");
            emit NewRace(id, races[id]);

        }

        ++id;
    }

}

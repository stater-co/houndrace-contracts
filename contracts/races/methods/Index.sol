// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        require(allowed[msg.sender]);
        if ( control.callable ) {

            races[id] = IGenerate(control.generator).generate(queue,theId);

            IOnBeforeRace(control.queues).onBeforeRace(races[id].queueId);

            emit NewFinishedRace(id, races[id]);

            ++id;

        } else {

            emit NewRace(id, Race.Struct(
                queue.name,
                queue.currency,
                queue.participants,
                queue.arena,
                queue.entryFee,
                0, // randomness >> to be generated on back-end
                1, // paymentsId >> to be set on back-end
                1, // rewardsId >> to be set on back-end
                theId,
                '0x00'
            ));

        }

    }

}

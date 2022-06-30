// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        require(allowed[msg.sender]);
        if ( control.callable ) {

            races[id] = IGenerate(control.generator).generate(queue,theId);

            Arena.Struct memory arena = IArena(control.arenas).arena(races[id].arena);

            IHandleArenaUsage(control.arenas).handleArenaUsage{ 
                value: arena.feeCurrency == address(0) ? arena.fee : 0
            }(races[id].arena);

            handleRaceLoot(races[id].paymentsId, races[id].rewardsId);

            emit NewFinishedRace(id, races[id]);

        } else {

            emit NewRace(id, Race.Struct(
                queue.name,
                queue.currency,
                queue.participants,
                queue.arena,
                queue.entryFee,
                0,
                1,
                1,
                theId,
                '0x00'
            ));

        }

        ++id;

    }

}

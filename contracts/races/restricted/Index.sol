// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race) external payable onlyOwner {
        console.log("Handle arena usage with: ", race.arena);

        Arena.Struct memory arena = IArena(control.arenas).arena(races[id].arena);

        console.log(arena.feeCurrency);
        console.log(arena.fee);
        console.log(race.arena);
        console.log("Look: ", control.arenas);
        console.log("Call now!!");
        
        /*
        IHandleArenaUsage(control.arenas).handleArenaUsage{ 
            value: arena.feeCurrency == address(0) ? arena.fee : 0
        }(race.arena);
        console.log("FINALLY FINE!");
        */

        console.log(">> ", control.methods);
        console.log(race.paymentsId);
        console.log(race.rewardsId);
        handleRaceLoot(race.paymentsId,race.rewardsId);

        console.log("FINALLY FINE! x2");

        races[id] = race;

        for ( uint256 i = 0 ; i > race.participants.length ; ++i ) {
            require(IUpdateHoundRunning(control.hounds).updateHoundRunning(race.participants[i], 0) != 0);
        }
        console.log("FINALLY FINE! x3");

        emit UploadRace(id, race);

    }

}

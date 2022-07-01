// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(uint256 theId, Race.Struct memory race) external payable onlyOwner {

        Arena.Struct memory arena = IArena(control.arenas).arena(race.arena);

        IHandleArenaUsage(control.arenas).handleArenaUsage{ 
            value: arena.feeCurrency == address(0) ? arena.fee : 0
        }(race.arena);

        //IHandleRaceLoot(control.methods).handleRaceLoot(race.paymentsId,race.rewardsId);

        races[theId] = race;

        for ( uint256 i = 0 ; i < race.participants.length ; ++i ) {
            ISetHoundIdling(control.hounds).setHoundIdling(race.participants[i]);
        }

        emit UploadRace(theId, race);

    }

}

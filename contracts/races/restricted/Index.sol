// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(
        uint256 raceId, 
        uint256 queueId,
        Race.Struct memory race
    ) 
        external 
        whitelisted 
    {

        if ( race.payments.from.length > 0 ) {

            IHandleArenaUsage(control.arenas).handleArenaUsage(race.core.arena);

            IHandleRaceLoot(control.races).handleRaceLoot(race.payments);

        }

        uint32 staminaCost = IStaminaCostOf(control.queues).staminaCostOf(queueId);

        for ( uint256 i = 0 ; i < race.core.participants.length ; ++i ) {
            
            IUpdateHoundRunning(control.hounds).updateHoundRunning(race.core.participants[i], 0);

            if ( staminaCost > 0 ) {
                IUpdateHoundStamina(control.hounds).updateHoundStamina(race.core.participants[i], staminaCost);
            }
            
        }

        races[raceId] = race;
        emit UploadRace(raceId, queueId, race);

    }

}

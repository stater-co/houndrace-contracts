// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(
        RacesConstructor.Struct memory input
    ) 
        Params(input) 
    {
        
    }

    function uploadRace(
        uint256 theId, 
        uint256 queueId,
        Race.Struct memory race
    ) 
        external 
        allowed(msg.sender,msg.sig) 
    {

        IHandleArenaUsage(control.arenas).handleArenaUsage(race.core.arena);

        IHandleRaceLoot(control.races).handleRaceLoot(race.core.payments);

        races[theId] = race;
        uint32 staminaCost = IStaminaCostOf(control.queues).staminaCostOf(queueId);

        for ( uint256 i = 0 ; i < race.core.participants.length ; ++i ) {
            require(IUpdateHoundRunning(control.hounds).updateHoundRunning(race.core.participants[i], 0) != 0);
            IUpdateHoundStamina(control.hounds).updateHoundStamina(race.core.participants[i], staminaCost);
        }

        emit UploadRace(theId, queueId, race);

    }

}

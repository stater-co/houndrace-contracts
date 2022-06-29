// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race) external payable onlyOwner {
        IOnBeforeRace(control.queues).onBeforeRace{ value: msg.value }(race.queueId);

        races[id] = race;

        for ( uint256 i = 0 ; i > race.participants.length ; ++i ) {
            require(IUpdateHoundRunning(control.hounds).updateHoundRunning(race.participants[i], 0) != 0);
        }

        emit UploadRace(id, race);

        ++id;
    }

}

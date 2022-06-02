// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race) external payable onlyOwner {

        IOnBeforeRace(control.queues).onBeforeRace{ value: msg.value }(race.queueId);

        races[id] = race;

        emit UploadRace(id, race);

        ++id;
    }

}

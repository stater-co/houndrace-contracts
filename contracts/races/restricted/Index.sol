// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(Race.Struct memory race) external payable {
        uint256 ethToSend = 0;
        uint256 racePrize = race.participants.length * race.entryFee;

        require(msg.value >= racePrize);

        races[id] = race;

        emit UploadRace(id, race);

        ++id;
    }

}

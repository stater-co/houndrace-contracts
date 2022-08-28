// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(uint256 theId, Race.Struct memory race) external payable onlyOwner {

        IHandleArenaUsage(control.arenas).handleArenaUsage(race.arena);

        for ( uint256 i = 0 ; i < race.payments.from.length ; ++i ) {
            IPay(control.payments).pay(
                race.payments.from[i],
                race.payments.to[i],
                race.payments.currency[i],
                race.payments.ids[i],
                race.payments.amounts[i],
                race.payments.paymentType[i]
            );
        }

        races[theId] = race;

        for ( uint256 i = 0 ; i < race.participants.length ; ++i ) {
            require(IUpdateHoundRunning(control.hounds).updateHoundRunning(race.participants[i], 0) != 0);
        }

        emit UploadRace(theId, race);

    }

}

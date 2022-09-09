// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(uint256 theId, Race.Struct memory race) external payable onlyOwner {

        IHandleArenaUsage(control.arenas).handleArenaUsage(race.core.arena);

        for ( uint256 i = 0 ; i < race.core.payments.from.length ; ++i ) {
            IPay(control.payments).pay(
                race.core.payments.from[i],
                race.core.payments.to[i],
                race.core.payments.currency[i],
                race.core.payments.ids[i],
                race.core.payments.amounts[i],
                race.core.payments.paymentType[i]
            );
        }

        races[theId] = race;

        for ( uint256 i = 0 ; i < race.core.participants.length ; ++i ) {
            require(IUpdateHoundRunning(control.hounds).updateHoundRunning(race.core.participants[i], 0) != 0);
        }

        emit UploadRace(theId, race);

    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesRestricted is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function uploadRace(uint256 theId, Race.Struct memory race) external payable onlyOwner {

        Arena.Struct memory arena = IArena(control.arenas).arena(race.arena);

        IHandleArenaUsage(control.arenas).handleArenaUsage(race.arena);

        (bool success, ) = control.payments.delegatecall(
            abi.encodeWithSignature(
                "handleRaceLoot((address[],address[],address[],uint256[][],uint256[][],uint32[]))", 
                race.payments
            )
        );
        require(success);

        races[theId] = race;

        for ( uint256 i = 0 ; i < race.participants.length ; ++i ) {
            require(IUpdateHoundRunning(control.hounds).updateHoundRunning(race.participants[i], 0) != 0);
        }

        emit UploadRace(theId, race);

    }

}

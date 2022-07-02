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

        (bool success, ) = control.payments.delegatecall(
            abi.encodeWithSignature(
                "handleRaceLoot(address[],address[],address[],uint256[][],uint256[][],uint32[])", 
                race.payments.from,
                race.payments.to,
                race.payments.currency,
                race.payments.ids,
                race.payments.amounts,
                race.payments.paymentType
            )
        );
        
        races[theId] = race;

        for ( uint256 i = 0 ; i < race.participants.length ; ++i ) {
            ISetHoundIdling(control.hounds).setHoundIdling(race.participants[i]);
        }

        emit UploadRace(theId, race);

    }

}

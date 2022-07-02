// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        require(allowed[msg.sender]);

        if ( control.callable ) {

            races[id] = IGenerate(control.generator).generate(queue,theId);

            Arena.Struct memory arena = IArena(control.arenas).arena(races[id].arena);

            IHandleArenaUsage(control.arenas).handleArenaUsage{ 
                value: arena.feeCurrency == address(0) ? arena.fee : 0
            }(races[id].arena);

            handleRaceLoot(
                queue.payments.from,
                queue.payments.to,
                queue.payments.currency,
                queue.payments.ids,
                queue.payments.amounts,
                queue.payments.paymentType
            );

            for ( uint256 i = 0 ; i < queue.participants.length ; ++i ) {
                ISetHoundIdling(control.hounds).setHoundIdling(queue.participants[i]);
            }

            emit NewFinishedRace(id, races[id]);

        } else {

            emit NewRace(id, Race.Struct(
                queue.name,
                queue.currency,
                queue.participants,
                queue.arena,
                queue.entryFee,
                0,
                queue.payments, // payments to be filled
                theId,
                '0x00'
            ));

        }

        ++id;

    }

    function handleRaceLoot(
        address[] memory from,
        address[] memory to,
        address[] memory currency,
        uint256[][] memory id,
        uint256[][] memory amount,
        uint32[] memory paymentType
    ) public payable {
        require(allowed[msg.sender]);

        for ( uint256 i = 0 ; i < from.length ; ++i ) {
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature(
                    "pay(address,address,address,uint256[],uint256[],uint32)", 
                    from[i],
                    to[i],
                    currency[i],
                    id[i],
                    amount[i],
                    paymentType[i]
                )
            );
            require(success);
        }

    }

}

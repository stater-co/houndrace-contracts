// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue, uint256 theId) external {
        require(allowed[msg.sender]);
        if ( control.callable ) {

            races[id] = IGenerate(control.generator).generate(queue,theId);

            IHandleArenaUsage(control.queues).handleArenaUsage(races[id].queueId);

            IHandleRaceLoot(control.methods).handleRaceLoot(races[id].paymentsId, races[id].rewardsId);

            emit NewFinishedRace(id, races[id]);

            ++id;

        } else {

            emit NewRace(id, Race.Struct(
                queue.name,
                queue.currency,
                queue.participants,
                queue.arena,
                queue.entryFee,
                0,
                1,
                1,
                theId,
                '0x00'
            ));

        }

    }

    function handleRaceLoot(uint256 paymentsId, uint256 rewardsId) external {
        require(allowed[msg.sender]);
        Payment.Struct[] memory payments = IGetPayments(control.directives).getPayments(paymentsId);
        Reward.Struct[] memory rewards = IGetRewards(control.directives).getRewards(rewardsId);

        for ( uint256 i = 0 ; i < payments.length ; ++i ) {
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature("runPayment((address,address,address,uint256[],uint256,uint32,uint32,uint32))", payments[i])
            );
            require(success);
        }

        for ( uint256 i = 0 ; i < rewards.length ; ++i ) {
            (bool success, ) = control.payments.delegatecall(
                abi.encodeWithSignature("runPayment((address,address,address,uint256[],uint256,uint32,uint32,uint32))", rewards[i].payment)
            );
            require(success);
        }
    }

}

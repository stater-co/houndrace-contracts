// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract GeneratorMethods is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function generate(Queue.Struct memory queue, uint256 queueId) external returns(Race.Struct memory race) {

        require(control.allowed == msg.sender);
        require(queue.participants.length == queue.totalParticipants);
        
        uint256 theRandomness = IGetRandomNumber(control.randomness).getRandomNumber(abi.encode(block.timestamp));

        (uint256[] memory participants, uint256[] memory scores) = ISimulateClassicRace(control.zerocost).simulateClassicRace(queue.participants,queue.arena,theRandomness);
    
        race = Race.Struct(
            queue.name,
            queue.currency,
            participants,
            queue.arena,
            queue.entryFee,
            theRandomness,
            queue.paymentsId,
            queue.rewardsId,
            queueId,
            abi.encode(scores)
        );

        emit NewRace(queue,race);

    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract GeneratorMethods is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function generate(Queue.Struct memory queue, uint256 queueId) external view returns(Race.Struct memory) {

        require(control.allowed == msg.sender);
        require(queue.participants.length == queue.totalParticipants);
        
        uint256 theRandomness = IGetRandomNumber(control.randomness).getRandomNumber(abi.encode(block.timestamp));

        (uint256[] memory participants, uint256[] memory scores) = ISimulateClassicRace(control.zerocost).simulateClassicRace(queue.participants,queue.arena,theRandomness);

        return Race.Struct(
            queue.name,
            IArenaCurrency(control.arenas).arenaCurrency(queue.arena),
            participants,
            queue.arena,
            queue.entryFee,
            theRandomness,
            queue.fee,
            queue.payments,
            queueId,
            abi.encode(scores)
        );

    }

}

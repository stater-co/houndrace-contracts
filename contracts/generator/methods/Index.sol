// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
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
            queue.currency,
            participants,
            queue.arena,
            queue.entryFee,
            theRandomness,
            queue.payments,
            queueId,
            abi.encode(scores)
        );

    }

}

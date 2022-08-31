// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract GeneratorMethods is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function generate(Queue.Struct memory queue, uint256 queueId) external view returns(Race.Struct memory) {

        require(control.allowed == msg.sender);
        require(queue.core.participants.length == queue.totalParticipants);
        
        uint256 theRandomness = IGetRandomNumber(control.randomness).getRandomNumber(abi.encode(block.timestamp));

        (uint256[] memory participants, uint256[] memory scores) = ISimulateClassicRace(control.zerocost).simulateClassicRace(queue.core.participants,queue.core.arena,theRandomness);

        return Race.Struct(
            Core.Struct(
                queue.core.name,
                queue.core.feeCurrency,
                queue.core.entryFeeCurrency,
                participants,
                queue.core.enqueueDates,
                queue.core.arena,
                queue.core.entryFee,
                queue.core.fee,
                queue.core.payments
            ),
            theRandomness,
            queueId,
            abi.encode(scores)
        );

    }

}

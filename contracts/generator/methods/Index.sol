// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract GeneratorMethods is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function generate(Queue.Struct memory queue) external payable returns(Race.Struct memory race) {

        require(control.allowed == msg.sender);
        
        require(queue.participants.length == queue.totalParticipants);

        require(queue.entryFee <= msg.value);

        uint256 theRandomness = IRandomness(control.randomness).getRandomNumber(abi.encode(block.timestamp));

        (, uint256[] memory participants) = simulateClassicRace(queue.participants,queue.arena,theRandomness);

        IPayments(control.payments).sendPayments(
            PaymentRequest.Struct(
                queue.rewardsId,
                Converters.erc721IdsToOwners(control.hounds,participants)
            )
        );
    
        race = Race.Struct(
            queue.name,
            queue.currency,
            participants,
            queue.arena,
            queue.entryFee,
            queue.rewardsId,
            theRandomness,
            abi.encode(participants)
        );

        emit NewRace(queue,race);

    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract GeneratorMethods is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function generate(Queue.Struct memory queue) external returns(Race.Struct memory race) {

        console.log(control.allowed, " == ", msg.sender);

        require(control.allowed == msg.sender);

        console.log(queue.participants.length, " == ", queue.totalParticipants);
        
        require(queue.participants.length == queue.totalParticipants);
        
        uint256 theRandomness = IRandomness(control.randomness).getRandomNumber(abi.encode(block.timestamp));

        console.log("ok..");

        (, uint256[] memory participants) = simulateClassicRace(queue.participants,queue.arena,theRandomness);

        console.log("ok...");

        console.log("ok....");
    
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

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract GeneratorMethods is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function generate(Queue.Struct memory queue) external payable returns(Race.Struct memory race) {

        console.log("msg.value: ", msg.value);

        console.log(control.allowed, " == ", msg.sender);

        require(control.allowed == msg.sender);

        console.log(queue.participants.length, " == ", queue.totalParticipants);
        
        require(queue.participants.length == queue.totalParticipants);

        console.log(queue.entryFee * queue.totalParticipants, " <= ", msg.value);

        require(queue.entryFee * queue.totalParticipants <= msg.value);

        uint256 theRandomness = IRandomness(control.randomness).getRandomNumber(abi.encode(block.timestamp));

        console.log("ok..");

        (, uint256[] memory participants) = simulateClassicRace(queue.participants,queue.arena,theRandomness);

        console.log("ok...");

        Payment.Struct[] memory payments = IPayments(control.payments).getPayments(queue.rewardsId);

        console.log("ok... v2");

        uint256 ethToSend = 0;

        // custom ERC20 / ERC721 / ERC1155 will be sent to the contract that makes the transfer, to avoid code complications
        for ( uint256 i = 0 ; i < payments.length ; ++i ) {
            if ( payments[i].currency == address(0) ) {
                ethToSend += payments[i].qty;
            }
        }

        console.log("Eth to send: ", ethToSend);

        IPayments(control.payments).sendPayments{ value: ethToSend }(
            PaymentRequest.Struct(
                queue.rewardsId,
                Converters.erc721IdsToOwners(control.hounds,participants)
            )
        );

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

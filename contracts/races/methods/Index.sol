// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue) external payable {
        if ( control.callable ) {
            
            console.log("The sender is: ", msg.sender);
            console.log("Race start here, 3");

            (bool success, bytes memory output) = control.generator.call{ value: queue.entryFee * queue.totalParticipants }(
                abi.encodeWithSignature(
                    "generate((string,address,uint256[],uint256,uint256,uint256,uint256,uint256,uint32))",
                    queue
                )
            );
            require(success);
            
            races[id] = abi.decode(output,(Race.Struct));
            console.log("Race start here, 4");

            emit NewFinishedRace(id,  races[id]);

        } else {

            emit NewRace(id, races[id]);

        }

        console.log("Race start here, 5");

        ++id;

    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesMethods is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function raceStart(Queue.Struct memory queue) external payable {
        if ( control.callable ) {
            
            console.log("The sender is: ", msg.sender);

            /*
            (bool success, bytes memory output) = control.generator.call{ value: queue.entryFee * queue.totalParticipants }(
                abi.encodeWithSignature(
                    "generate((uint256,uint256[],address,uint256,uint32))",
                    queue
                )
            );
            require(success);
            
            races[id] = abi.decode(output,(Race.Struct));
            */

            emit NewFinishedRace(id,  races[id]);

        } else {

            emit NewRace(id, races[id]);

        }

        ++id;

    }

}

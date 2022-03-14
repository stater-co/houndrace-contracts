// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';
import '../../hounds/hound/Index.sol';
import '../../hounds/zerocost/IIndex.sol';


contract RacesMethods is Params { 

    function enqueue(uint256 theId, uint256 hound) external payable {
    
        require(queues[theId].totalParticipants > 0);

        require(queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp);

        require(msg.value >= queues[theId].entryFee);

        Hound.Struct memory houndObj = IHoundsZerocost(control.hounds).hound(hound);

        require(!houndObj.running);

        queues[theId].participants.push(hound);
        
        IHoundsModifier(control.hounds).updateHoundStamina(hound);

        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            if ( control.callable ) {
                
                (bool success, bytes memory output) = control.raceGenerator.call{ value: queues[theId].entryFee * queues[theId].totalParticipants }(
                    abi.encodeWithSignature(
                        "generate((uint256,uint256[],address,uint256,uint32))",
                        queues[theId]
                    )
                );
                require(success);
                
                races[id] = abi.decode(output,(Race.Struct));

                emit NewFinishedRace(id,  races[id]);

                ++id;

            } else {

                emit NewRace(theId, queues[theId]);

            }

            delete queues[theId].participants;

        }

        emit PlayerEnqueue(theId,hound,msg.sender);

    }

}

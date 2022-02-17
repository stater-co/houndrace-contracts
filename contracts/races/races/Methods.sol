// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import '@openzeppelin/contracts/access/Ownable.sol';
import '../../hounds/Hound.sol';
import '../../hounds/IData.sol';
import '../../arenas/Arena.sol';
import '../../arenas/IData.sol';
import '../../utils/Converters.sol';
import '../../payments/PaymentRequest.sol';
import './Race.sol';
import './Queue.sol';
import './Constructor.sol';


contract RacesMethods is Ownable {
    
    event NewRace(uint256 indexed id, Queue.Struct race);
    event NewFinishedRace(uint256 indexed id, Race.Struct race);
    event UploadRace(uint256 indexed id, Race.Struct race);
    event QueuesCreation(uint256 indexed idStart, uint256 indexed idStop, Queue.Struct[] newQueues);
    event DeleteQueue(uint256 indexed id);
    event PlayerEnqueue(uint256 indexed id, uint256 indexed hound, address indexed player);
    uint256 public id = 1;
    Constructor.Struct public control;
    mapping(uint256 => Queue.Struct) public queues;
    string error = "Failed to delegatecall";
    mapping(uint256 => Payment.Struct[]) public rewards;
    mapping(uint256 => Race.Struct) public races;    

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
        control = input;
    }

    function createQueues(Queue.Struct[] memory theQueues) external onlyOwner {
        
        for ( uint256 i = 0 ; i < theQueues.length ; ++i ) {
            require(IArenas(control.terrains).getTerrain(theQueues[i].arena).fee < theQueues[i].entryFee / 2, "32");
            queues[id] = theQueues[i];
            ++id;
        }
        emit QueuesCreation(id-theQueues.length,id-1,theQueues);
    }

    function deleteQueue(uint256 theId) external onlyOwner {
        delete queues[theId];
        emit DeleteQueue(theId);
    }

    function uploadRace(Race.Struct memory race, Payment.Struct[] memory payments) external onlyOwner {
        
        // Save the finished race
        races[id] = race;

        // Perform all race payments / rewards
        // Send the rewards to players
        (bool success, ) = control.payments.delegatecall(
            abi.encodeWithSignature(
                "sendHardcodedPayments((address,address,address,uint256[],uint256,uint256,uint32)[])",
                payments
            )
        );
        require(success,"Failed to createLoan via delegatecall");

        emit UploadRace(id, race);

        // Increase the finished race id
        ++id;

    }

    function enqueue(uint256 theId, uint256 hound) external payable {
    
        require(queues[theId].totalParticipants > 0, "31");

        require(queues[theId].startDate <= block.timestamp && queues[theId].endDate >= block.timestamp, "33");

        // Queue verifications
        require(msg.value >= queues[theId].entryFee, "17");

        // Hound verifications
        Hound.Struct memory houndObj = IHoundsData(control.hounds).hound(hound);

        require(!houndObj.running, "13");

        // Adds the participant in the queue
        queues[theId].participants.push(hound);
        
        IHoundsData(control.hounds).updateHoundStamina(hound);

        // If last participant in the queue is calling this
        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {

            if ( control.callable ) {
                
                (bool success, bytes memory output) = control.raceGenerator.call{ value: queues[theId].entryFee * queues[theId].totalParticipants }(
                    abi.encodeWithSignature(
                        "generate((uint256,uint256[],address,uint256,uint32))",
                        queues[theId]
                    )
                );
                require(success,error);
                
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

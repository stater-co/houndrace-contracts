// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import '@openzeppelin/contracts/access/Ownable.sol';
import '../../utils/FilterForWinners.sol';
import '../../hounds/Hound.sol';
import '../../hounds/IData.sol';
import '../../payments/Payments.sol';

import './Race.sol';
import '../Constructor.sol';


contract RacesMethods is Ownable, Payments {
    
    event NewRace(uint256 indexed id, Race.Struct race);
    event NewFinishedRace(uint256 indexed id, Race.Finished race);
    event QueuesCreation(uint256 indexed idStart, uint256 indexed idStop, Race.Struct[] newQueues);
    event DeleteQueue(uint256 indexed id);
    event UploadRace(uint256 indexed id, Race.Finished race);
    event PlayerEnqueue(uint256 indexed id, uint256 indexed hound, address indexed player);
    uint256 public id = 1;
    Constructor.Struct public control;
    mapping(uint256 => Race.Struct) public queues;
    string error = "Failed to delegatecall";

    /**
     * DIIMIIM:
     * We'll save the races structure as bytes and we'll decode them into their specific tuple using their specific generator contract
     */
    mapping(uint256 => Race.Finished) public races;    

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external {
        control = input;
    }

    function createQueues(Race.Struct[] memory theQueues) external {
        for ( uint256 i = 0 ; i < theQueues.length ; ++i ) {
            queues[id] = theQueues[i];
            ++id;
        }
        emit QueuesCreation(id-theQueues.length,id-1,theQueues);
    }

    function deleteQueue(uint256 theId) external {
        delete queues[theId];
        emit DeleteQueue(theId);
    }

    function uploadRace(Race.Finished memory race, Payment.Struct[] memory payments) external {
        
        // Save the finished race
        races[id] = race;

        // Perform all race payments / rewards
        compoundTransfer(payments);

        emit UploadRace(id, race);

        // Increase the finished race id
        ++id;

    }

    /*
     * DIIMIIM:
     * Enqueue method
     */
    function enqueue(uint256 theId, uint256 hound) external payable {
    
        require(queues[theId].totalParticipants > 0, "31");

        // Queue verifications
        require(msg.value >= queues[theId].entryFee, "17");

        // Hound verifications
        Hound.Struct memory houndObj = IHoundsData(control.hounds).hound(hound);

        require(!houndObj.running, "13");

        bool success;
        bytes memory output;

        // Adds the participant in the queue
        queues[theId].participants.push(hound);
        
        IHoundsData(control.hounds).updateHoundStamina(hound);

        // If last participant in the queue is calling this
        if ( queues[theId].participants.length == queues[theId].totalParticipants ) {


            /*
             * DIIMIIM:
             * Blockchain race generator
             * No custom rewards mechanism available
             */
            if ( control.callable ) {
                
                (success, output) = control.raceGenerator.call{ value: queues[theId].entryFee * queues[theId].totalParticipants }(
                    abi.encodeWithSignature(
                        "generate((uint256,uint256[],address,uint256,uint32))",
                        queues[theId]
                    )
                );
                require(success,error);
                
                races[id] = abi.decode(output,(Race.Finished));

                emit NewFinishedRace(id,  races[id]);

                ++id;

            /*
             * DIIMIIM:
             * Back-end race generator
             * Fully customizable
             */
            } else {

                emit NewRace(theId, queues[theId]);

            }

            delete queues[theId].participants;

        }

        emit PlayerEnqueue(theId,hound,msg.sender);

    }

}

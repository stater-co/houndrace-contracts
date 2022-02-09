// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import '../../arenas/Arena.sol';
import '../../hounds/Hound.sol';
import '../../payments/Payments.sol';
import '../../hounds/IData.sol';
import '../../arenas/IData.sol';
import '../../randomness/vanilla/IData.sol';
import '../../utils/FilterForWinners.sol';
import '../races/Race.sol';
import '../Constructor.sol';


/**
 * DIIMIIM:
 * This should not have any storage, except the constructor ones
 */
contract RaceGeneratorMethods is Payments {

    event NewRace(Race.Struct queue, Race.Finished race);
    Constructor.Struct public control;
    string error = "Failed to delegatecall";

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external {
        control = input;
    }

    // Compute the race hounds stats
    function computeHoundsStats(uint256[] memory participants, Arena.Struct memory terrain) internal view returns(uint256[] memory) {

        uint256[] memory stats = new uint256[](participants.length);

        Hound.Struct memory hound;

        // For each hound
        for ( uint256 i = 0 ; i < participants.length ; ++i ) {

            // Hound verifications
            hound = IHoundsData(control.hounds).hound(participants[i]);

            // Compute the main stats
            stats[i] = uint256((hound.identity.geneticSequence[30] + hound.identity.geneticSequence[31] + hound.identity.geneticSequence[32] + hound.identity.geneticSequence[33]) * 99);
            uint256 tmp = stats[i];

            // Compute the environmental stats
            if ( hound.identity.geneticSequence[9] == terrain.surface )
                stats[i] += tmp / 20;
            if ( hound.identity.geneticSequence[10] == terrain.distance )
                stats[i] += tmp / 20;
            if ( hound.identity.geneticSequence[11] == terrain.weather )
                stats[i] += tmp / 20;

            // Compute the stamina stats
            if ( hound.stamina.staminaCap / 2 > hound.stamina.stamina )
                stats[i] = stats[i] * 90 / 100;

        }

        return stats;

    }

    // Simulate the classic race seed
    function simulateClassicRace(uint256[] memory participants, uint256 terrain, uint256 theRandomness) public view returns(bytes memory output) {
        
        Arena.Struct memory theTerrain = ITerrains(control.terrains).getTerrain(terrain);

        // Compute the hounds score power
        
        uint256[] memory houndsPower = computeHoundsStats(participants, theTerrain);
        
        // Variation of their power will be up to 15%, using randomness
        uint256 variation = uint256(keccak256(abi.encode(theRandomness, block.difficulty))) % 15;

        // Updating their score power
        for ( uint256 j = 0 ; j < houndsPower.length ; ++j ) 
            houndsPower[j] = houndsPower[j] + ( ( houndsPower[j] * variation ) / 100 );
        
        // Encoding it into bytes
        output =  abi.encode(
            quickSort(
                houndsPower,
                0,
                houndsPower.length-1
            )
        );

    }

    function generate(Race.Struct memory queue) external payable returns(Race.Finished memory race) {

        require(control.allowed == msg.sender, "23");
        
        require(queue.participants.length == queue.totalParticipants, "19");

        // Queue verifications
        require(queue.entryFee <= msg.value, "17");

        // Generates the randomness
        uint256 theRandomness = IRandomnessVanillaData(control.randomness).getRandomNumber(abi.encode(block.timestamp));
        bytes memory seed = simulateClassicRace(queue.participants,queue.arena,theRandomness);

        // Decode the race seed into the participants array
        uint256[] memory participants = abi.decode(seed,(uint256[]));

        // Gets the first indexes of the best participants
        uint256[3] memory winners = FilterForWinners.filterForWinners(participants);

        sendRewards(
            [
                IHoundsData(control.hounds).ownerOf(winners[0]),
                IHoundsData(control.hounds).ownerOf(winners[1]),
                IHoundsData(control.hounds).ownerOf(winners[2])
            ],
            queue.currency,
            [
                queue.entryFee * 5, 
                queue.entryFee * 3, 
                queue.entryFee * 2
            ]
        );
    
        race = Race.Finished(
            queue.currency,
            participants,
            queue.arena,
            queue.entryFee,
            theRandomness
        );

        // Emit the race event
        emit NewRace(queue,race);

    }

    function sendRewards(address[3] memory winners, address currency, uint256[3] memory amounts) public payable {
        for ( uint256 i = 0 ; i < 3 ; ++i ) {
            transferTokens(
                address(this),
                payable(winners[i]),
                currency,
                amounts[i]
            );
        }
    }

    function quickSort(uint256[] memory arr, uint256 left, uint256 right) internal pure returns(uint[] memory){
        uint256 i = left;
        uint256 j = right;
        if (i == j) return arr;
        uint256 pivot = arr[uint(left + (right - left) / 2)];
        while (i <= j) {
            while (arr[uint(i)] < pivot) i++;
            while (pivot < arr[uint(j)]) j--;
            if (i <= j) {
                (arr[uint(i)], arr[uint(j)]) = (arr[uint(j)], arr[uint(i)]);
                i++;
                j--;
            }
        }
        if (left < j)
            quickSort(arr, left, j);
        if (i < right)
            quickSort(arr, i, right);
        return arr;
    }

}

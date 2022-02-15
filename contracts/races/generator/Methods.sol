// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import '@openzeppelin/contracts/access/Ownable.sol';
import '../../utils/Sortings.sol';
import '../../arenas/Arena.sol';
import '../../hounds/Hound.sol';
import '../../payments/Payments.sol';
import '../../hounds/IData.sol';
import '../../arenas/IData.sol';
import '../../randomness/vanilla/IData.sol';
import '../../utils/Filters.sol';
import '../races/Race.sol';
import './Constructor.sol';


/**
 * DIIMIIM:
 * This should not have any storage, except the constructor ones
 */
contract RaceGeneratorMethods is Ownable, Payments {

    event NewRace(Race.Struct queue, Race.Finished race);
    Constructor.Struct public control;
    string error = "Failed to delegatecall";
    IHoundsData public houndsContract;

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
        control = input;
        houndsContract = IHoundsData(control.hounds);
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
    function simulateClassicRace(
        uint256[] memory participants, 
        uint256 terrain, 
        uint256 theRandomness
    ) 
        public 
        view 
    returns(
        uint256[] memory, 
        uint256[] memory
    ) {
        
        Arena.Struct memory theTerrain = IArenas(control.terrains).getTerrain(terrain);

        // Compute the hounds score power
        
        uint256[] memory houndsPower = computeHoundsStats(participants, theTerrain);
        
        // Variation of their power will be up to 15%, using randomness
        uint256 variation = uint256(keccak256(abi.encode(theRandomness, block.difficulty))) % 15;

        // Updating their score power
        for ( uint256 j = 0 ; j < houndsPower.length ; ++j ) 
            houndsPower[j] = houndsPower[j] + ( ( houndsPower[j] * variation ) / 100 );
        
        // Encoding it into bytes
        return Sortings.rankPlayers(
            houndsPower,
            participants,
            0,
            houndsPower.length-1
        );

    }

    function generate(Race.Struct memory queue) external payable returns(Race.Finished memory race) {

        require(control.allowed == msg.sender, "23");
        
        require(queue.participants.length == queue.totalParticipants, "19");

        // Queue verifications
        require(queue.entryFee <= msg.value, "17");

        // Generates the randomness
        uint256 theRandomness = IRandomnessVanillaData(control.randomness).getRandomNumber(abi.encode(block.timestamp));

        // Decode the race seed into the participants array
        (, uint256[] memory participants) = simulateClassicRace(queue.participants,queue.arena,theRandomness);

        // Gets the first indexes of the best participants
        address[] memory winners = new address[](queue.winnersPercentagePrize.length);
        uint256[] memory prizes = new uint256[](queue.winnersPercentagePrize.length);
        
        for ( uint256 i = 0 ; i < winners.length ; ++i ) {
            winners[i] = houndsContract.ownerOf(participants[i]);
            prizes[i] = queue.entryFee * queue.winnersPercentagePrize[i] / 100;
        }
        uint256 jackpot = queue.entryFee * queue.totalParticipants;

        sendRewards(
            winners,
            queue.currency,
            prizes
        );
    
        race = Race.Finished(
            queue.currency,
            participants,
            queue.arena,
            queue.entryFee,
            theRandomness,
            queue.winnersPercentagePrize
        );

        // Emit the race event
        emit NewRace(queue,race);

    }

    function sendRewards(address[] memory winners, address currency, uint256[] memory amounts) public payable {
        for ( uint256 i = 0 ; i < winners.length ; ++i ) {
            transferTokens(
                address(this),
                payable(winners[i]),
                currency,
                amounts[i]
            );
        }
    }

}

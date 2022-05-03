// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import '../IIndex.sol';
import '../../queues/params/Queue.sol';
import '../../races/params/Race.sol';
import '../../hounds/IIndex.sol';
import '../../randomness/IIndex.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/IIndex.sol';
import '../../payments/IIndex.sol';
import '../../utils/Converters.sol';
import '../../utils/Sortings.sol';
import 'hardhat/console.sol';


contract Params is Ownable {

    event NewRace(Queue.Struct queue, Race.Struct race);
    GeneratorConstructor.Struct public control;

    constructor(GeneratorConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(GeneratorConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function computeHoundsStats(uint256[] memory participants, Arena.Struct memory terrain) internal view returns(uint256[] memory) {

        uint256[] memory stats = new uint256[](participants.length);

        Hound.Struct memory hound;

        for ( uint256 i = 0 ; i < participants.length ; ++i ) {

            hound = IHounds(control.hounds).hound(participants[i]);

            stats[i] = uint256((hound.identity.geneticSequence[30] + hound.identity.geneticSequence[31] + hound.identity.geneticSequence[32] + hound.identity.geneticSequence[33]) * 99);
            uint256 tmp = stats[i];

            if ( hound.identity.geneticSequence[9] == terrain.surface )
                stats[i] += tmp / 20;
            if ( hound.identity.geneticSequence[10] == terrain.distance )
                stats[i] += tmp / 20;
            if ( hound.identity.geneticSequence[11] == terrain.weather )
                stats[i] += tmp / 20;

            if ( hound.stamina.staminaCap / 2 > hound.stamina.staminaValue )
                stats[i] = stats[i] * 90 / 100;

        }

        return stats;

    }

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
        
        Arena.Struct memory theTerrain = IArenas(control.arenas).arena(terrain);
        
        uint256[] memory houndsPower = computeHoundsStats(participants, theTerrain);
        
        uint256 variation = uint256(keccak256(abi.encode(theRandomness, block.difficulty))) % 15;

        for ( uint256 j = 0 ; j < houndsPower.length ; ++j ) 
            houndsPower[j] = houndsPower[j] + ( ( houndsPower[j] * variation ) / 100 );
        
        return Sortings.rankPlayers(
            houndsPower,
            participants,
            0,
            houndsPower.length-1
        );

    }

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract GeneratorZerocost is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function computeHoundsStats(
        uint256[] memory participants, 
        Arena.Struct memory terrain
    ) 
        internal 
        view 
    returns(
        uint256[] memory
    ) {

        uint256[] memory stats = new uint256[](participants.length);
        HoundIdentity.Struct memory identity;
        HoundStamina.Struct memory stamina;

        for ( uint256 i = 0 ; i < participants.length ; ++i ) {

            identity = IGetIdentity(control.incubator).getIdentity(participants[i]);
            stamina = IGetStamina(control.gamification).getStamina(participants[i]);

            stats[i] = uint256((identity.geneticSequence[30] + identity.geneticSequence[31] + identity.geneticSequence[32] + identity.geneticSequence[33]) * 99);
            uint256 tmp = stats[i];

            if ( identity.geneticSequence[9] == terrain.surface )
                stats[i] += tmp / 20;
            if ( identity.geneticSequence[10] == terrain.distance )
                stats[i] += tmp / 20;
            if ( identity.geneticSequence[11] == terrain.weather )
                stats[i] += tmp / 20;

            if ( stamina.staminaCap / 2 > stamina.staminaValue )
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
        
        Arena.Struct memory theTerrain = IArena(control.arenas).arena(terrain);
        
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
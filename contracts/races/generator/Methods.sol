// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../../utils/Sortings.sol';
import '../../utils/Converters.sol';
import '../../arenas/Arena.sol';
import '../../hounds/Hound.sol';
import '../../hounds/IData.sol';
import '../../arenas/IData.sol';
import '../../randomness/vanilla/IData.sol';
import '../../payments/PaymentRequest.sol';
import '../races/Race.sol';
import '../races/Queue.sol';
import './Constructor.sol';


contract RaceGeneratorMethods is Ownable {

    event NewRace(Queue.Struct queue, Race.Struct race);
    Constructor.Struct public control;
    string error = "Failed to delegatecall";
    IHoundsData public houndsContract;

    function setGlobalParameters(
        Constructor.Struct memory input
    ) external onlyOwner {
        control = input;
        houndsContract = IHoundsData(control.hounds);
    }

    function computeHoundsStats(uint256[] memory participants, Arena.Struct memory terrain) internal view returns(uint256[] memory) {

        uint256[] memory stats = new uint256[](participants.length);

        Hound.Struct memory hound;

        for ( uint256 i = 0 ; i < participants.length ; ++i ) {

            hound = IHoundsData(control.hounds).hound(participants[i]);

            stats[i] = uint256((hound.identity.geneticSequence[30] + hound.identity.geneticSequence[31] + hound.identity.geneticSequence[32] + hound.identity.geneticSequence[33]) * 99);
            uint256 tmp = stats[i];

            if ( hound.identity.geneticSequence[9] == terrain.surface )
                stats[i] += tmp / 20;
            if ( hound.identity.geneticSequence[10] == terrain.distance )
                stats[i] += tmp / 20;
            if ( hound.identity.geneticSequence[11] == terrain.weather )
                stats[i] += tmp / 20;

            if ( hound.stamina.staminaCap / 2 > hound.stamina.stamina )
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
        
        Arena.Struct memory theTerrain = IArenas(control.terrains).arena(terrain);
        
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

    function generate(Queue.Struct memory queue) external payable returns(Race.Struct memory race) {

        require(control.allowed == msg.sender, "23");
        
        require(queue.participants.length == queue.totalParticipants, "19");

        require(queue.entryFee <= msg.value, "17");

        uint256 theRandomness = IRandomnessVanillaData(control.randomness).getRandomNumber(abi.encode(block.timestamp));

        (, uint256[] memory participants) = simulateClassicRace(queue.participants,queue.arena,theRandomness);

        (bool success, ) = control.payments.delegatecall(
            abi.encodeWithSignature(
                "compoundTransfer((uint256,address[]))",
                PaymentRequest.Struct(
                    queue.rewardsId,
                    Converters.erc721IdsToOwners(control.hounds,participants)
                )
            )
        );
        require(success,"Failed to createLoan via delegatecall");
    
        race = Race.Struct(
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

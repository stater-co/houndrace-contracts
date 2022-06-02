// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';


contract IncubatorMethods is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1Id, Hound.Struct memory hound1, uint256 hound2Id, Hound.Struct memory hound2) public view returns(Hound.Struct memory) {
        
        uint256 randomness = IGetRandomNumber(control.randomness).getRandomNumber(
            abi.encode(hound1Id > hound2Id ? hound1.identity.geneticSequence : hound2.identity.geneticSequence)
        );
        uint32[54] memory genetics = IMixGenes(control.genetics).mixGenes(
            hound1.identity.geneticSequence, 
            hound2.identity.geneticSequence,
            randomness
        );

        Hound.Statistics memory houndStatistics = Hound.Statistics(
            0,
            0,
            0,
            0    
        );

        Hound.Stamina memory stamina = Hound.Stamina(
            randomness % 2 == 0 ? hound1.stamina.staminaRefill1xCurrency : hound2.stamina.staminaRefill1xCurrency,
            0,
            .1 ether,
            100,
            1,
            100
        );

        Hound.Breeding memory breeding = Hound.Breeding(
            randomness % 2 == 0 ? hound1.breeding.breedingFeeCurrency : hound2.breeding.breedingFeeCurrency,
            control.secondsToMaturity, 
            .3 ether,
            0,
            false
        );

        Hound.Identity memory identity = Hound.Identity(
            hound1Id,
            hound2Id,
            hound1.identity.generation + hound2.identity.generation,
            block.timestamp, // evm timestamps are in seconds
            genetics // preferences will be extracted from this 
        );

        return Hound.Struct(
            houndStatistics,
            stamina,
            breeding,
            identity,
            "",
            "",
            false,
            false
        );
    }

}
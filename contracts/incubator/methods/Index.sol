// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Index.sol';
import '../params/BreedHoundsInput.sol';

contract IncubatorMethods is Params {

    function breedHounds(bytes memory rawInput) public view returns(Hound.Struct memory) {
        BreedHoundsInput.Struct memory input = abi.decode(rawInput,(BreedHoundsInput.Struct));
        
        uint256 randomness = IGetRandomNumber(control.randomness).getRandomNumber(
            abi.encode(input.hound1Id > input.hound2Id ? input.hound1.identity.geneticSequence : input.hound2.identity.geneticSequence)
        );
        uint32[54] memory genetics = IMixGenes(control.genetics).mixGenes(
            input.hound1.identity.geneticSequence, 
            input.hound2.identity.geneticSequence,
            randomness
        );

        Hound.Statistics memory houndStatistics = Hound.Statistics(
            0,
            0,
            0,
            0    
        );

        Hound.Stamina memory stamina = Hound.Stamina(
            randomness % 2 == 0 ? input.hound1.stamina.staminaRefill1xCurrency : input.hound2.stamina.staminaRefill1xCurrency,
            0,
            .1 ether,
            100,
            1,
            100
        );

        Hound.Breeding memory breeding = Hound.Breeding(
            randomness % 2 == 0 ? input.hound1.breeding.breedingFeeCurrency : input.hound2.breeding.breedingFeeCurrency,
            control.secondsToMaturity, 
            .3 ether,
            0,
            false
        );

        Hound.Identity memory identity = Hound.Identity(
            input.hound1Id,
            input.hound2Id,
            input.hound1.identity.generation + input.hound2.identity.generation,
            block.timestamp * 1000, // evm timestamps are in seconds
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
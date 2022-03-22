// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract IncubatorMethods is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 h1, Hound.Struct memory hound1, uint256 h2, Hound.Struct memory hound2) public view returns(Hound.Struct memory) {
        uint32[54] memory genetics = IGeneticsZerocost(control.genetics).mixGenes(
            hound1.identity.geneticSequence, 
            hound2.identity.geneticSequence, 
            IRandomnessZerocost(control.randomness).getRandomNumber(
                abi.encode(h1 > h2 ? hound1.identity.geneticSequence : hound2.identity.geneticSequence)
            )
        );

        Statistics.Struct memory houndStatistics = Statistics.Struct(
            0,
            0,
            0,
            0    
        );

        Stamina.Struct memory stamina = Stamina.Struct(
            0,
            10000000000000000, // 0.01 ETH
            100,
            1,
            100
        );

        Breeding.Struct memory breeding = Breeding.Struct(
            control.secondsToMaturity, 
            300000000000000000, // 0.3 ETH
            0,
            false
        );

        Identity.Struct memory identity = Identity.Struct(
            h1,
            h2,
            hound2.identity.generation + hound1.identity.generation,
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
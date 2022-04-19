// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract IncubatorMethods is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1Id, Hound.Struct memory hound1, uint256 hound2Id, Hound.Struct memory hound2) public view returns(Hound.Struct memory) {
        
        uint32[54] memory genetics = IGeneticsZerocost(control.genetics).mixGenes(
            hound1.identity.geneticSequence, 
            hound2.identity.geneticSequence,
            IRandomnessZerocost(control.randomness).getRandomNumber(
                abi.encode(hound1Id > hound2Id ? hound1.identity.geneticSequence : hound2.identity.geneticSequence)
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
            .1 ether,
            100,
            1,
            100
        );

        Breeding.Struct memory breeding = Breeding.Struct(
            control.secondsToMaturity, 
            .3 ether,
            0,
            false
        );

        Identity.Struct memory identity = Identity.Struct(
            hound1Id,
            hound2Id,
            hound1.identity.generation + hound2.identity.generation,
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
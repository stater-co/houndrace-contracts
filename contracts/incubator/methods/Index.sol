// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract IncubatorMethods is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(
        uint256 hound1Id, 
        Hound.Struct memory hound1, 
        uint256 hound2Id, 
        Hound.Struct memory hound2, 
        uint256 theId
    ) public view returns(Hound.Struct memory) {
        
        uint256 randomness = IGetRandomNumber(control.randomness).getRandomNumber(
            abi.encode(hound1Id > hound2Id ? hound1.identity.geneticSequence : hound2.identity.geneticSequence)
        );
        uint32[54] memory genetics = IMixGenes(control.genetics).mixGenes(
            hound1.identity.geneticSequence, 
            hound2.identity.geneticSequence,
            randomness
        );

        return Hound.Struct(
            IGetStatistics(control.races).getStatistics(theId),
            IGetStamina(control.gamification).getStamina(theId),
            IGetBreeding(control.gamification).getBreeding(theId),
            HoundIdentity.Struct(
                hound1Id,
                hound2Id,
                hound1.identity.generation + hound2.identity.generation,
                block.timestamp,
                genetics,
                ""
            ),
            "",
            "",
            0,
            false
        );
    }

}
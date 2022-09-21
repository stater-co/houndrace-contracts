// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract IncubatorMethods is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(
        uint256 hound1Id, 
        HoundIdentity.Struct memory hound1, 
        uint256 hound2Id, 
        HoundIdentity.Struct memory hound2, 
        uint256 theId
    ) public {
        require(allowed[msg.sender]);
        
        uint256 randomness = IGetRandomNumber(control.randomness).getRandomNumber(
            abi.encode(hound1Id > hound2Id ? hound1.geneticSequence : hound2.geneticSequence)
        );
        uint32[54] memory genetics = IMixGenes(control.genetics).mixGenes(
            hound1.geneticSequence, 
            hound2.geneticSequence,
            randomness
        );

        IInitializeHoundGamingStats(control.gamification).initializeHoundGamingStats(theId, genetics);

        houndsIdentity[theId] = HoundIdentity.Struct(
            hound1Id,
            hound2Id,
            hound1.generation + hound2.generation,
            block.timestamp,
            genetics,
            "",
            uint256(uint160(control.randomness)) % 100 == 99 ? 
                (
                    hound1.specie > hound2.specie ? 
                        hound1.specie
                    : 
                        hound2.specie
                )
            : 
                (
                    hound1.specie > hound2.specie ? 
                        hound2.specie
                    : 
                        hound1.specie
                )
        );
    }

}
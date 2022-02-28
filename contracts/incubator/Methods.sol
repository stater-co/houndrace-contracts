// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import '../hounds/Hound.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import '../randomness/vanilla/IData.sol';
import '../genetics/IData.sol';


contract IncubatorMethods is Ownable {
    
    Constructor.Struct public control;
    string error = "Failed to delegatecall";
    
    function setGlobalParameters(Constructor.Struct memory input) external {
        control = input;
    }

    function breedHounds(uint256 hound1, uint32[54] memory hound1GeneticSequence, uint256 hound2, uint32[54] memory hound2GeneticSequence) public returns(Hound.Struct memory) {
        uint32[54] memory genetics = IGeneticsMethods(control.genetics).mixGenes(
            hound1GeneticSequence, 
            hound2GeneticSequence, 
            IRandomnessVanillaData(control.randomness).getRandomNumber(
                abi.encode(hound1 > hound2 ? hound1GeneticSequence : hound2GeneticSequence)
            )
        );

        Statistics.Struct memory houndStatistics = Statistics.Struct(
            0,
            0,
            0,
            0    
        );

        Stamina.Struct memory stamina = Stamina.Struct(
            block.timestamp,
            10000000000000000, // 0.01 ETH
            100,
            1,
            100
        );

        Breeding.Struct memory breeding = Breeding.Struct(
            control.secondsToMaturity, 
            300000000000000000, // 0.3 ETH
            block.timestamp,
            false
        );

        Identity.Struct memory identity = Identity.Struct(
            0,
            hound1,
            hound2,
            block.timestamp,
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
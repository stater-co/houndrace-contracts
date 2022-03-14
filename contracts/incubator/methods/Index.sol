// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../../hounds/hound/Index.sol';
import '../params/Constructor.sol';
import '../../genetics/methods/IIndex.sol';
import '../../randomness/zerocost/IIndex.sol';


contract IncubatorMinterMethods {
    
    IncubatorConstructor.Struct public control;

    function breedHounds(uint256 hound1, uint32[54] memory hound1GeneticSequence, uint256 hound2, uint32[54] memory hound2GeneticSequence) public view returns(Hound.Struct memory) {
        uint32[54] memory genetics = IGeneticsZerocostMethods(control.genetics).mixGenes(
            hound1GeneticSequence, 
            hound2GeneticSequence, 
            IRandomnessMethods(control.randomness).getRandomNumber(
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
            0,
            hound1,
            hound2,
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
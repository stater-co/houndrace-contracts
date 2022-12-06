//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function breedHounds(
        uint256 hound1, 
        uint256 hound2
    ) 
        external 
        payable 
        nonReentrant 
    {

        require(
            matingSeason && 
            hounds[hound2].breeding.lastBreed + control.breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].breeding.lastBreed + control.breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].profile.runningOn == 0 && 
            hounds[hound2].profile.runningOn == 0 && 
            ( ( hounds[hound1].identity.geneticSequence[1] == 1 && hounds[hound2].identity.geneticSequence[1] == 2 ) || 
            ( hounds[hound1].identity.geneticSequence[1] == 2 && hounds[hound2].identity.geneticSequence[1] == 1 ) ) && 
            ownerOf(hound1) == msg.sender
        );

        uint256[] memory amounts = new uint256[](1);

        amounts[0] = control.fees.platformBreedFee;
        IPay(control.boilerplate.payments).pay{
            value: control.fees.platformBreedFeeCurrency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.fees.platformBreedFeeCurrency,
            new uint256[](0),
            amounts,
            control.fees.platformBreedFeeCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        amounts[0] = control.fees.breedTransactionFee;
        IPay(control.boilerplate.payments).pay{
            value: control.fees.breedTransactionFeeCurrency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.houndsInitializer,
            control.fees.breedTransactionFeeCurrency,
            new uint256[](0),
            amounts,
            control.fees.breedTransactionFeeCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        if ( ownerOf(hound2) != ownerOf(hound1) ) {

            amounts[0] = hounds[hound2].breeding.externalBreedingFee;
            IPay(control.boilerplate.payments).pay{
                value: control.breeding.externalBreedingFeeCurrency == address(0) ? amounts[0] : 0
            }(
                control.boilerplate.payments,
                ownerOf(hound2),
                control.breeding.externalBreedingFeeCurrency,
                new uint256[](0),
                amounts,
                control.breeding.externalBreedingFeeCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
            );
                
        }

        hounds[hound2].breeding.lastBreed = block.timestamp;
        hounds[hound1].breeding.lastBreed = block.timestamp;

        Hound.Struct memory offspring = control.defaultHound;
        offspring.identity.generation = hounds[hound2].identity.generation + hounds[hound1].identity.generation;
        offspring.identity.maleParent = hounds[hound1].identity.geneticSequence[1] == 1 ? hound1 : hound2;
        offspring.identity.femaleParent = hounds[hound1].identity.geneticSequence[1] == 2 ? hound1 : hound2;
        offspring.stamina.staminaLastUpdate = block.timestamp;
        offspring.identity.geneticSequence = IMixGenes(control.boilerplate.genetics).mixGenes(
            hounds[hound1].identity.geneticSequence, 
            hounds[hound2].identity.geneticSequence,
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.difficulty, 
                        block.timestamp, 
                        block.gaslimit,
                        blockhash(block.number-1)
                    )
                )
            )
        );

        emit BreedHound(
            hound1, 
            hound2, 
            id, 
            offspring, 
            msg.sender
        );
        ++id;

    } 

}
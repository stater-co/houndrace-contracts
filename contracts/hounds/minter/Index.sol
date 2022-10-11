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
            hounds[hound2].breeding.lastBreed + hounds[hound2].breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].breeding.lastBreed + hounds[hound1].breeding.breedingCooldown < block.timestamp && 
            hounds[hound1].profile.runningOn == 0 && 
            hounds[hound2].profile.runningOn == 0 && 
            ( ( hounds[hound1].identity.geneticSequence[1] == 1 && hounds[hound2].identity.geneticSequence[1] == 2 ) || 
            ( hounds[hound1].identity.geneticSequence[1] == 2 && hounds[hound2].identity.geneticSequence[1] == 1 ) ) && 
            ownerOf(hound1) == msg.sender && 
            msg.value >= (
                control.fees.breedCostCurrency == address(0) ? 
                    control.fees.breedCost 
                : 
                    0
            ) + (
                control.fees.breedFeeCurrency == address(0) ? 
                    control.fees.breedFee 
                : 
                    0
            )
        );

        uint256[] memory amounts = new uint256[](1);

        amounts[0] = control.fees.breedCost;
        IPay(control.boilerplate.payments).pay{
            value: control.fees.breedCostCurrency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.fees.breedCostCurrency,
            new uint256[](0),
            amounts,
            control.fees.breedCostCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        amounts[0] = control.fees.breedFee;
        IPay(control.boilerplate.payments).pay{
            value: control.fees.breedFeeCurrency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.fees.breedFeeCurrency,
            new uint256[](0),
            amounts,
            control.fees.breedFeeCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        if ( ownerOf(hound2) != ownerOf(hound1) ) {

            require(
                msg.value >= (
                    control.fees.breedCostCurrency == address(0) ? 
                        control.fees.breedCost 
                    : 
                        0
                ) + (
                    control.fees.breedFeeCurrency == address(0) ? 
                        control.fees.breedFee 
                    : 
                        0
                ) + (
                    hounds[hound2].breeding.breedingFeeCurrency == address(0) ? 
                        hounds[hound2].breeding.breedingFee 
                    : 
                        0
                )
            );

            amounts[0] = hounds[hound2].breeding.breedingFee;
            IPay(control.boilerplate.payments).pay(
                control.boilerplate.payments,
                ownerOf(hound2),
                hounds[hound2].breeding.breedingFeeCurrency,
                new uint256[](0),
                amounts,
                hounds[hound2].breeding.breedingFeeCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
            );
                
        }

        hounds[hound2].breeding.lastBreed = block.timestamp;
        hounds[hound1].breeding.lastBreed = block.timestamp;

        emit BreedHound(hound1, hound2, id,msg.sender);
        ++id;

    } 

}
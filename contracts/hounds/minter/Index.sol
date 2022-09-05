//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract HoundsMinter is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        HoundBreeding.Struct memory breeding1 = IGetBreeding(control.boilerplate.gamification).getBreeding(hound1);
        HoundBreeding.Struct memory breeding2 = IGetBreeding(control.boilerplate.gamification).getBreeding(hound2);
        HoundIdentity.Struct memory identity1 = IGetIdentity(control.boilerplate.incubator).getIdentity(hound1);
        HoundIdentity.Struct memory identity2 = IGetIdentity(control.boilerplate.incubator).getIdentity(hound2);

        require(
            matingSeason && 
            breeding2.lastBreed + breeding2.breedingCooldown < block.timestamp && 
            breeding1.lastBreed + breeding1.breedingCooldown < block.timestamp && 
            hounds[hound1].queueId == 0 && 
            hounds[hound2].queueId == 0 && 
            ( ( identity1.geneticSequence[1] == 1 && identity2.geneticSequence[1] == 2 ) || 
            ( identity1.geneticSequence[1] == 2 && identity2.geneticSequence[1] == 1 ) ) && 
            ownerOf(hound1) == msg.sender
        );

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = control.fees.breedCost + control.fees.breedFee + breeding2.breedingFee;

        IPay(control.boilerplate.payments).pay{
            value: control.fees.currency == address(0) ? amounts[0] : 0
        }(
            msg.sender,
            control.boilerplate.payments,
            control.fees.currency,
            new uint256[](0),
            amounts,
            control.fees.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        amounts[0] = control.fees.breedFee;
        IPay(control.boilerplate.payments).pay(
            control.boilerplate.payments,
            control.boilerplate.alphadune,
            control.fees.currency,
            new uint256[](0),
            amounts,
            control.fees.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        require(msg.value >= (control.fees.currency == address(0) ? control.fees.breedCost : 0) + (control.fees.currency == address(0) ? control.fees.breedFee : 0));
        if ( ownerOf(hound2) != ownerOf(hound1) ) {
            require(msg.value >= (control.fees.currency == address(0) ? control.fees.breedCost : 0) + (control.fees.currency == address(0) ? control.fees.breedFee : 0) + (control.fees.currency == address(0) ? breeding2.breedingFee : 0));
            
            amounts[0] = breeding2.breedingFee;
            IPay(control.boilerplate.payments).pay(
                control.boilerplate.payments,
                ownerOf(hound2),
                control.fees.currency,
                new uint256[](0),
                amounts,
                control.fees.currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
            );
                
        }

        breeding2.lastBreed = block.timestamp;
        breeding1.lastBreed = block.timestamp;

        IBreedHounds(control.boilerplate.incubator).breedHounds(
            hound1, 
            identity1, 
            hound2, 
            identity2,
            id
        );

        ISetBreeding(control.boilerplate.gamification).setBreeding(hound1, breeding1);
        ISetBreeding(control.boilerplate.gamification).setBreeding(hound2, breeding2);

        hounds[id] = HoundProfile.Struct(
            "",
            "",
            0,
            false
        );

        emit BreedHound(id,msg.sender,this.hound(id));
        ++id;

    } 

}
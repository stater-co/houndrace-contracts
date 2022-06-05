//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../../payments/interfaces/IHandleHoundsBreedPayment.sol';
import '../../incubator/interfaces/IBreedHounds.sol';
import '../interfaces/IUpdateHoundBreeding.sol';
import '../interfaces/IHoundOwner.sol';
import '../params/Constructor.sol';
import '../params/Hound.sol';


contract HoundsMinter is Ownable {
    uint256 public id = 1;
    mapping(uint256 => Hound.Struct) public hounds;
    event HoundEvent(uint256 indexed id, Hound.Struct hound);
    Constructor.Struct public control;

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable returns(bool) {

        /*
        require(
            hounds[hound2].breeding.breedCooldown < block.timestamp && 
            hounds[hound1].breeding.breedCooldown < block.timestamp && 
            !hounds[hound1].running && 
            !hounds[hound2].running // && 
            //IHoundOwner(control.boilerplate.hounds).houndOwner(hound1) == msg.sender
        );
        */
/*
        IHandleHoundsBreedPayment(control.boilerplate.payments).handleHoundsBreedPayment{
            value: msg.value
        }(
            HoundsBreedPayment.Struct(
                control.fees.breedCostCurrency,
                control.fees.breedFeeCurrency,
                hounds[hound2].breeding.breedingFeeCurrency,
                control.boilerplate.staterApi,
                IHoundOwner(control.boilerplate.hounds).houndOwner(hound2),
                control.fees.breedCost,
                hounds[hound2].breeding.breedingFee,
                control.fees.breedFee,
                IHoundOwner(control.boilerplate.hounds).houndOwner(hound2) == IHoundOwner(control.boilerplate.hounds).houndOwner(hound1),
                hounds[hound2]
            )
        );
*/

        hounds[hound2].breeding.breedCooldown = block.timestamp + 172800;
        hounds[hound1].breeding.breedCooldown = block.timestamp + 172800;
        Hound.Struct memory offspring;/* = IBreedHounds(control.boilerplate.incubator).breedHounds(
            hound1, 
            hounds[hound1], 
            hound2, 
            hounds[hound2]
        );
        IUpdateHoundBreeding(control.boilerplate.hounds).updateHoundBreeding(hound1,hound2);
        */
        emit HoundEvent(id,offspring);
        ++id;
        return true;
    } 

}
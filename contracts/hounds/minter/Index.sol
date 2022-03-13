//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '../hound/Index.sol';
import '../params/Constructor.sol';
import '../params/GlobalVariables.sol';
import '../../payments/IData.sol';
import '../../incubator/IData.sol';


contract HoundsMinterMethods is ERC721 {
    uint256 public id = 1;
    mapping(uint256 => Hound.Struct) public hounds;
    event BreedHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    Constructor.Struct public control;
    IPayments public payments;

    constructor() ERC721("","") {}

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        require(
            hounds[hound2].breeding.breedCooldown < block.timestamp && 
            hounds[hound1].breeding.breedCooldown < block.timestamp && 
            !hounds[hound1].running && 
            !hounds[hound2].running && 
            ownerOf(hound1) == msg.sender
        );
        uint256[] memory tmp;
        if ( ownerOf(hound1) == msg.sender && ownerOf(hound2) == msg.sender ) {
            require(msg.value >= control.breedCost + control.breedFee);
        } else {
            require(
                hounds[hound2].breeding.availableToBreed && 
                msg.value >= control.breedCost + control.breedFee + hounds[hound2].breeding.breedingFee
            );
            payments.transferTokens(
                Payment.Struct(msg.sender,
                    payable(ownerOf(hound2)),
                    address(0),
                    tmp,
                    hounds[hound2].breeding.breedingFee,
                    2
                )
            );
        }
        payments.transferTokens(
            Payment.Struct(
                msg.sender,
                payable(control.staterApi),
                address(0),
                tmp,
                control.breedFee,
                2
            )
        );
        hounds[hound2].breeding.breedCooldown = block.timestamp + 172800;
        hounds[hound1].breeding.breedCooldown = block.timestamp + 172800;
        Hound.Struct memory offspring = IIncubatorData(control.incubator).breedHounds(
            hound1, 
            hounds[hound1].identity.geneticSequence, 
            hound2, 
            hounds[hound2].identity.geneticSequence
        );
        updateHoundBreeding(hound1,0);
        updateHoundBreeding(hound2,0);
        emit BreedHound(id,msg.sender,offspring);
        ++id;
    } 

}
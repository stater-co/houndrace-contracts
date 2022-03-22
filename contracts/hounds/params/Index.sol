//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import './Constructor.sol';
import '../hound/Index.sol';
import '../../payments/methods/IIndex.sol';
import '../modifier/IIndex.sol';
import '../../incubator/methods/IIndex.sol';
import '../../shop/methods/IIndex.sol';
import '../../ogars/IIndex.sol';


abstract contract Params is Ownable, ERC721, ERC721Holder {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    event NewHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event BreedHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event HoundBreedable(uint256 indexed id, uint256 price);
    event HoundStaminaUpdate(uint256 indexed id, uint32 stamina);
    event HoundBreedingStatusUpdate(uint256 indexed id, bool status);
    Constructor.Struct public control;

    constructor(
        Constructor.Struct memory input
    ) ERC721(input.name,input.symbol) {
        for ( uint256 i = 0 ; i < input.allowedCallers.length ; ++i )
            allowed[input.allowedCallers[i]] = true;
        control = input;
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        for ( uint256 i = 0 ; i < globalParameters.allowedCallers.length ; ++i )
            allowed[globalParameters.allowedCallers[i]] = !allowed[globalParameters.allowedCallers[i]];

        control.boilerplate.incubator = globalParameters.boilerplate.incubator;
        control.boilerplate.staterApi = globalParameters.boilerplate.staterApi;
        control.boilerplate.payments = globalParameters.boilerplate.payments;
        control.boilerplate.restricted = globalParameters.boilerplate.restricted;
        control.fees.breedCost = globalParameters.fees.breedCost;
        control.fees.breedFee = globalParameters.fees.breedFee;
        control.fees.refillBreedingCooldownCost = globalParameters.fees.refillBreedingCooldownCost;
        control.fees.refillStaminaCooldownCost = globalParameters.fees.refillStaminaCooldownCost;
    }

}
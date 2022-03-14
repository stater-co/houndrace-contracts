//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract HoundsRestrictedMethods is Params {

    constructor() ERC721("","") {}

    function setGlobalParameters(
        GlobalVariables.Struct memory input
    ) external {

        for ( uint256 i = 0 ; i < input.allowedCallers.length ; ++i )
            allowed[input.allowedCallers[i]] = input.isAllowed[i];

        control.boilerplate.methods = input.boilerplate.methods;
        control.boilerplate.incubator = input.boilerplate.incubator;
        control.boilerplate.staterApi = input.boilerplate.staterApi;
        control.boilerplate.shop = input.boilerplate.shop;
        control.boilerplate.payments = input.boilerplate.payments;
        control.boilerplate.restricted = input.boilerplate.restricted;
        control.fees.breedCost = input.fees.breedCost;
        control.fees.breedFee = input.fees.breedFee;
        control.fees.refillCost = input.fees.refillCost;
        control.fees.refillBreedingCooldownCost = input.fees.refillBreedingCooldownCost;
        control.fees.refillStaminaCooldownCost = input.fees.refillStaminaCooldownCost;

    }
    
    function initializeHound(uint256 onId, Hound.Struct memory theHound) external {
        if ( onId > 0 ) {
            require(hounds[onId].identity.maleParent == 0 && hounds[onId].stamina.staminaCap > 0);
            emit NewHound(onId,msg.sender,theHound);
            hounds[onId] = theHound;
            _safeMint(msg.sender,onId);
        } else {
            emit NewHound(id,msg.sender,theHound);
            hounds[id] = theHound;
            _safeMint(msg.sender,id);
            ++id;
        }
    }

    function setTokenURI(uint256 _tokenId, string memory token_url) external {
        hounds[_tokenId].token_url = token_url;
    }

}
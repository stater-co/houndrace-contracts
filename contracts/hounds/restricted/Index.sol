//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract HoundsRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function initializeHound(uint256 onId, address owner, Hound.Struct memory theHound) external {
        if ( onId > 0 ) {
            HoundIdentity.Struct memory identity = IGetIdentity(control.boilerplate.incubator).getIdentity(onId);
            HoundStamina.Struct memory stamina = IGetStamina(control.boilerplate.gamification).getStamina(onId);
            require(identity.maleParent == 0 && stamina.staminaCap == 0 && onId < id);
            emit NewHound(onId,msg.sender,theHound);
            hounds[onId] = theHound;
            _safeMint(owner,onId);
        } else {
            emit NewHound(id,msg.sender,theHound);
            hounds[id] = theHound;
            _safeMint(owner,id);
            ++id;
        }
    }

    function setTokenURI(uint256 _tokenId, string memory token_uri) external {
        hounds[_tokenId].token_uri = token_uri;
        emit NewTokenUri(_tokenId, token_uri);
    }

}
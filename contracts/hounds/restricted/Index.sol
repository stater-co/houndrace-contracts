//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract HoundsRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function initializeHound(uint256 onId, address owner, Hound.Struct memory theHound) external {
        if ( onId > 0 ) {
            require(theHound.identity.maleParent == 0 && theHound.stamina.staminaCap == 0 && onId < id);
            emit NewHound(onId,msg.sender,theHound);
            hounds[onId] = theHound.profile;
            _safeMint(owner,onId);
        } else {
            emit NewHound(id,msg.sender,theHound);
            hounds[id] = theHound.profile;
            _safeMint(owner,id);
            ++id;
        }
    }

    function setTokenURI(uint256 _tokenId, string memory token_uri) external {
        hounds[_tokenId].token_uri = token_uri;
        emit NewTokenUri(_tokenId, token_uri);
    }

}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract HoundsRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
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
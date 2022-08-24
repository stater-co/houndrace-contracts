//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract HoundsRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function initializeHound(uint256 onId, address owner, Hound.Struct memory theHound) external {
        console.log("Gamification: ", control.boilerplate.gamification, onId, owner);
        if ( onId > 0 ) {
            require(theHound.stamina.staminaCap > 0 && onId < id && (theHound.identity.geneticSequence[1] == 1 || theHound.identity.geneticSequence[1] == 2));
            console.log("ok 1");
            IInitializeHoundGamingStats(control.boilerplate.gamification).initializeHoundGamingStats(onId, theHound.identity.geneticSequence);
            console.log("ok 2");
            ISetIdentity(control.boilerplate.incubator).setIdentity(onId, theHound.identity);
            console.log("ok 3");
            emit NewHound(onId,msg.sender,theHound);
            console.log("ok 4");
            hounds[onId] = theHound.profile;
            _safeMint(owner,onId);
        } else {
            IInitializeHoundGamingStats(control.boilerplate.gamification).initializeHoundGamingStats(id, theHound.identity.geneticSequence);
            ISetIdentity(control.boilerplate.incubator).setIdentity(id, theHound.identity);
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
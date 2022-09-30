//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract HoundsRestricted is Params {

    constructor(
        Constructor.Struct memory input
    ) 
        Params(input) 
    {
        
    }
    
    function initializeHound(
        uint256 onId, 
        address owner, 
        Hound.Struct memory theHound
    ) external {
        require(IsAllowed(control.boilerplate.firewall).isAllowed(msg.sender,msg.sig));

        if ( onId > 0 ) {

            require(bytes(hounds[onId].token_uri).length == 0);
            require(theHound.stamina.staminaCap > 0 && onId < id && (theHound.identity.geneticSequence[1] == 1 || theHound.identity.geneticSequence[1] == 2));

            IInitializeHoundGamingStats(control.boilerplate.gamification).initializeHoundGamingStats(onId, theHound.identity.geneticSequence);
            ISetIdentity(control.boilerplate.incubator).setIdentity(onId, theHound.identity);
            
            emit NewHound(onId,owner,theHound);
            
            hounds[onId] = theHound.profile;
            _safeMint(owner,onId);

        } else {
            
            IInitializeHoundGamingStats(control.boilerplate.gamification).initializeHoundGamingStats(id, theHound.identity.geneticSequence);
            ISetIdentity(control.boilerplate.incubator).setIdentity(id, theHound.identity);

            emit NewHound(id,owner,theHound);
            
            hounds[id] = theHound.profile;
            _safeMint(owner,id);
            ++id;

        }
    }
}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract HoundsRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function initializeHound(
        uint256 onId, 
        address owner, 
        Hound.Struct memory theHound
    ) external whitelisted {
        if ( onId > 0 ) {
            require(bytes(hounds[onId].profile.token_uri).length == 0);
            require(theHound.stamina.staminaCap > 0 && onId < id && (theHound.identity.geneticSequence[1] == 1 || theHound.identity.geneticSequence[1] == 2));
            
            emit NewHound(onId,owner,theHound);

            hounds[onId] = theHound;
            _safeMint(owner,onId);
        } else {
            emit NewHound(id,owner,theHound);

            hounds[id] = theHound;

            _safeMint(owner,id);
            ++id;
        }
    }

}
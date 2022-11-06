//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract HoundsRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}
    
    function initializeHound(
        uint256 onId, 
        address owner, 
        Hound.Struct memory createdHound
    ) external whitelisted {
        if ( onId > 0 ) {
            require(bytes(hounds[onId].profile.token_uri).length == 0);
            require(control.stamina.staminaCap > 0 && onId < id && (createdHound.identity.geneticSequence[1] == 1 || createdHound.identity.geneticSequence[1] == 2));
            
            emit NewHound(onId,owner,createdHound);

            hounds[onId] = createdHound;
            _safeMint(owner,onId);
        } else {
            emit NewHound(id,owner,createdHound);

            hounds[id] = createdHound;

            _safeMint(owner,id);
            ++id;
        }
    }

    function handleHoundRename(
        uint256 houndId,
        string memory newTokenURI, 
        bool validation
    ) external whitelisted {
        require(bytes(renamingProposals[houndId].proposal).length >= 3 && renamingProposals[houndId].sessionActive);
        require((bytes(newTokenURI).length > 0 && validation) || (bytes(newTokenURI).length == 0 && !validation));

        renamingProposals[houndId].accepted = validation;
        if ( validation ) {
            hounds[houndId].profile.token_uri = newTokenURI;
            hounds[houndId].profile.name = renamingProposals[houndId].proposal;
        }  
        renamingProposals[houndId].sessionActive = false; 
        
        emit RenameProposal(houndId, renamingProposals[houndId]);     
    }

}
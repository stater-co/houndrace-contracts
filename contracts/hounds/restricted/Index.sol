//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '../params/Constructor.sol';
import '../params/Hound.sol';


contract HoundsRestricted is Ownable, ERC721 {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    event HoundEvent(uint256 indexed id, Hound.Struct hound);
    Constructor.Struct public control;

    constructor(string memory name, string memory symbol) ERC721(name,symbol) {
        
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }
    
    function initializeHound(uint256 onId, Hound.Struct memory theHound) external {
        if ( onId > 0 ) {
            //require(hounds[onId].identity.maleParent == 0 && hounds[onId].stamina.staminaCap == 0 && onId < id);
            emit HoundEvent(onId,theHound);
            hounds[onId] = theHound;
            _safeMint(msg.sender,onId);
        } else {
            emit HoundEvent(id,theHound);
            hounds[id] = theHound;
            _safeMint(msg.sender,id);
            ++id;
        }
    }

    function setTokenURI(uint256 _tokenId, string memory token_uri) external {
        hounds[_tokenId].token_uri = token_uri;
        emit HoundEvent(_tokenId, hounds[_tokenId]);
    }

}
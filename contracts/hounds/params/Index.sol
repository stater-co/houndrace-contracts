//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '../../genetics/interfaces/IMixGenes.sol';
import '../../payments/interfaces/IPay.sol';
import '../../shop/interfaces/ICheckDiscount.sol';
import '../../payments/params/MicroPayment.sol';
import '../../whitelist/Index.sol';
import '../interfaces/IGetBreedCosts.sol';
import './Constructor.sol';
import './Hound.sol';


contract Params is ERC721, ERC721Holder, ReentrancyGuard, Whitelist {
    uint256 public id = 1;
    mapping(uint256 => Hound.Struct) public hounds;

    event NewHound(uint256 indexed id, address indexed owner, Hound.Struct hound);

    event BreedHound(
        uint256 parent1, 
        uint256 parent2, 
        uint256 indexed id, 
        Hound.Struct offspring,
        address indexed owner
    );

    event HoundBreedable(uint256 indexed id, uint256 price, bool status);

    event HoundStaminaUpdate(uint256 indexed id, uint32 stamina);

    event HoundBreedingStatusUpdate(uint256 indexed id, bool status);

    event HoundQueueStatusUpdate(uint256 indexed id, uint256 indexed queueId);

    Constructor.Struct public control;
    bool public matingSeason = true;

    constructor(Constructor.Struct memory input) ERC721(input.name,input.symbol) Whitelist(input.operators, input.targets) {
        control = input;
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        updateWhitelist(globalParameters.operators, globalParameters.targets);
    }

    function setMatingSeason(bool _matingSeason) external whitelisted {
        matingSeason = _matingSeason;
    }

    function houndOwner(uint256 tokenId) external view returns(address) {
        return ownerOf(tokenId);
    }

    function hound(uint256 theId) external view returns(Hound.Struct memory) {
        return hounds[theId];
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return hounds[_tokenId].profile.token_uri;
    }

}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import './Constructor.sol';
import './Hound.sol';
import '../../payments/interfaces/ITransferTokens.sol';
import '../../incubator/interfaces/IBreedHounds.sol';
import '../../shop/interfaces/ICalculateDiscount.sol';
import '../../utils/Withdrawable.sol';


contract Params is Ownable, ERC721, ERC721Holder, Withdrawable {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    event NewHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event BreedHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event NewTokenUri(uint256 indexed id, string token_uri);
    event HoundBreedable(uint256 indexed id, uint256 price);
    event HoundStaminaUpdate(uint256 indexed id, uint32 stamina);
    event HoundBreedingStatusUpdate(uint256 indexed id, bool status);
    event HoundQueueStatusUpdate(uint256 indexed id, uint256 indexed queueId);
    Constructor.Struct public control;

    constructor(Constructor.Struct memory input) ERC721(input.name,input.symbol) {
        handleAllowedCallers(input.allowedCallers);
        control = input;
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        handleAllowedCallers(globalParameters.allowedCallers);
        control = globalParameters;
    }

    function houndOwner(uint256 tokenId) external view returns(address) {
        return ownerOf(tokenId);
    }

    function hound(uint256 theId) external view returns(Hound.Struct memory) {
        return hounds[theId];
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return hounds[_tokenId].token_uri;
    }

    function handleAllowedCallers(address[] memory allowedCallers) internal {
        for ( uint256 i = 0 ; i < allowedCallers.length ; ++i )
            allowed[allowedCallers[i]] = !allowed[allowedCallers[i]];
    }

    fallback() external payable {}
    receive() external payable {}

}
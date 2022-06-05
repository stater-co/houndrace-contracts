//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import './params/Constructor.sol';
import './params/Hound.sol';


contract Hounds is Ownable, ERC721, ERC721Holder {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    event HoundEvent(uint256 indexed id, Hound.Struct hound);
    Constructor.Struct public control;

    constructor(string memory name, string memory symbol) ERC721(name,symbol) {
 
    }

    function setGlobalParameters(Constructor.Struct memory globalParameters) external onlyOwner {
        for ( uint256 i = 0 ; i < globalParameters.allowedCallers.length ; ++i )
            allowed[globalParameters.allowedCallers[i]] = !allowed[globalParameters.allowedCallers[i]];
        control = globalParameters;
    }

    function initializeHound(uint256 onId, Hound.Struct memory theHound) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function setTokenURI(uint256 _tokenId, string memory token_uri) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable returns(bool) {
        (bool success, bytes memory output) = control.boilerplate.minter.delegatecall(msg.data);
        require(success);
        success = abi.decode(output,(bool));
        
        return success;
    }

    function updateHoundStamina(uint256 theId) public {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function updateHoundBreeding(uint256 hound1, uint256 hound2) public {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function boostHoundStamina(uint256 theId, address user) public payable {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function boostHoundBreeding(uint256 theId, address user) public payable {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function updateHoundRunning(uint256 theId, bool running) public returns(bool) {
        (bool success, bytes memory output) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
        return abi.decode(output,(bool)); 
    }

    function getBreedCost(uint256 hound1, uint256 hound2) external view returns(uint256) {
        require(ownerOf(hound1) == msg.sender);
        return (control.fees.breedCostCurrency == address(0) ? control.fees.breedCost : 0) + (hounds[hound2].breeding.breedingFeeCurrency == address(0) ? hounds[hound2].breeding.breedingFee : 0) + (hounds[hound2].breeding.breedingFeeCurrency == address(0) ? control.fees.breedFee : 0);
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

    fallback() external payable {}
    receive() external payable {}

}
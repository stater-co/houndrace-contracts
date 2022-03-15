//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';
import './zerocost/IIndex.sol';


contract Hounds is Params {

    constructor(
        Constructor.Struct memory input
    ) ERC721(input.name,input.symbol) {
        control = input;
    }

    function setGlobalParameters(GlobalVariables.Struct memory input) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function initializeHound(uint256 onId, Hound.Struct memory theHound) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function setTokenURI(uint256 _tokenId, string memory token_url) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        (bool success, ) = control.boilerplate.minter.delegatecall(msg.data);
        require(success);
    }

    function updateHoundStamina(uint256 theId) public payable {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function updateHoundBreeding(uint256 theId, uint256 breedingCooldownToConsume) public payable {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function hound(uint256 theId) external view returns(Hound.Struct memory) {
        return hounds[theId];
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return hounds[_tokenId].token_url;
    }

    function getBreedCost(uint256 hound1, uint256 hound2) external view returns(uint256) {
        require(ownerOf(hound1) == msg.sender);
        return control.fees.breedCost + control.fees.breedFee + ( ownerOf(hound1) == msg.sender && ownerOf(hound2) == msg.sender ? 0 : hounds[hound2].breeding.breedingFee );
    }

}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import './params/Index.sol';


contract Hounds is Params {

    constructor(string memory name, string memory symbol) Params(name,symbol) {
        
    }

    function initializeHound(uint256 onId, Hound.Struct memory theHound) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function setTokenURI(uint256 _tokenId, string memory token_uri) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        (bool success, ) = control.boilerplate.minter.delegatecall(msg.data);
        require(success);
    }

    function updateHoundStamina(uint256 theId) public {
        (bool success, ) = control.boilerplate.houndModifier.delegatecall(msg.data);
        require(success);
    }

    function updateHoundBreeding(bytes memory rawInput) public {
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
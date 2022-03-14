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
        (bool success, ) = control.boilerplate.methods.delegatecall(msg.data);
        require(success);
    }

    function initializeHound(uint256 onId, Hound.Struct memory theHound) external onlyOwner {
        (bool success, ) = control.boilerplate.methods.delegatecall(msg.data);
        require(success);
    }

    function setTokenURI(uint256 _tokenId, string memory token_url) external onlyOwner {
        (bool success, ) = control.boilerplate.methods.delegatecall(msg.data);
        require(success);
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        (bool success, ) = control.boilerplate.methods.delegatecall(msg.data);
        require(success);
    }

    function updateHoundStamina(uint256 theId) public payable {
        (bool success, ) = control.boilerplate.methods.delegatecall(msg.data);
        require(success);
    }

    function updateHoundBreeding(uint256 theId, uint256 breedingCooldownToConsume) public payable {
        (bool success, ) = control.boilerplate.methods.delegatecall(msg.data);
        require(success);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        (bool success, ) = control.boilerplate.methods.delegatecall(msg.data);
        require(success);
    }

    function hound(uint256 theId) external view returns(Hound.Struct memory) {
        return IHoundsZerocost(control.boilerplate.zerocost).hound(theId);
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return IHoundsZerocost(control.boilerplate.zerocost).tokenURI(_tokenId);
    }

}
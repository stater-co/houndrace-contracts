//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import './params/Index.sol';


contract Hounds is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function initializeHound(uint256 onId, address owner, Hound.Struct memory theHound) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function setTokenURI(uint256 _tokenId, string memory token_uri) external onlyOwner {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        console.log("Breed hounds: ", hound1, hound2, control.boilerplate.minter);
        (bool success, ) = control.boilerplate.minter.delegatecall(msg.data);
        require(success);
    }

    function updateHoundStamina(uint256 theId) external {
        (bool success, ) = control.boilerplate.houndsModifier.delegatecall(msg.data);
        require(success);
    }

    function boostHoundStamina(uint256 theId, address user, uint256 payed) external payable {
        (bool success, ) = control.boilerplate.houndsModifier.delegatecall(msg.data);
        require(success);
    }

    function boostHoundBreeding(uint256 theId, address user, uint256 payed) external payable {
        (bool success, ) = control.boilerplate.houndsModifier.delegatecall(msg.data);
        require(success);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        (bool success, ) = control.boilerplate.houndsModifier.delegatecall(msg.data);
        require(success);
    }

    function updateHoundRunning(uint256 theId, uint256 queueId) external returns(uint256 oldQueueId) {
        (bool success, bytes memory output) = control.boilerplate.houndsModifier.delegatecall(msg.data);
        require(success);
        oldQueueId = abi.decode(output,(uint256)); 
    }

    function getBreedCost(uint256 hound) public view returns(MicroPayment.Struct memory, MicroPayment.Struct memory, MicroPayment.Struct memory) {
        console.log("Get breed cost: ", control.boilerplate.zerocost);
        return IGetBreedCost(control.boilerplate.zerocost).getBreedCost(hound);
    }

}
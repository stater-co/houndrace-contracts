//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './params/Index.sol';


contract Hounds is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function initializeHound(
        uint256 onId, 
        address owner, 
        Hound.Struct memory theHound
    ) external {
        (bool success, ) = control.boilerplate.restricted.delegatecall(msg.data);
        require(success);
    }

    function breedHounds(
        uint256 hound1, 
        uint256 hound2
    ) external payable {
        (bool success, ) = control.boilerplate.minter.delegatecall(msg.data);
        require(success);
    }

    function updateHoundStamina(
        uint256 theId, 
        uint32 amount
    ) external {
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

    function updateHoundRunning(uint256 theId, uint256 runningOn) external returns(uint256 ranOn) {
        (bool success, bytes memory output) = control.boilerplate.houndsModifier.delegatecall(msg.data);
        require(success);
        ranOn = abi.decode(output,(uint256)); 
    }

    function getBreedCosts(uint256 hound) public view returns(MicroPayment.Struct memory, MicroPayment.Struct memory, MicroPayment.Struct memory) {
        return IGetBreedCosts(control.boilerplate.zerocost).getBreedCosts(hound);
    }

}
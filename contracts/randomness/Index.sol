// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './zerocost/IIndex.sol';
import './params/Index.sol';


contract Randomness is Params {

    constructor(RandomnessConstructor.Struct memory randomnessConstructor) {
        control = randomnessConstructor;
    }

    function setGlobalParameters(address methods) external onlyOwner {
        (bool success, ) = methods.delegatecall(msg.data);
        require(success);
    }

    function getRandomNumber(bytes memory input) external view returns(uint256) {
        return IRandomnessZerocost(control.zerocost).getRandomNumber(input);
    }


}


// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';


contract Generator is Params {

    constructor(
        GeneratorConstructor.Struct memory input
    ) {
        control = input;
    }

    function setGlobalParameters(
        GeneratorConstructor.Struct memory input
    ) external onlyOwner {
        (bool success, bytes memory output) = input.restricted.delegatecall(msg.data);
        require(success);
    }

    function simulateClassicRace(Hound.Struct[] memory participants, uint256 terrain, uint256 theRandomness) public returns(bytes memory seed) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
        return output;
    }

    function generate(Race.Struct memory queue) external payable returns(Race.Struct memory) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
        return abi.decode(output,(Race.Struct));
    }

}

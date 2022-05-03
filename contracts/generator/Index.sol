// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';


contract Generator is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function simulateClassicRace(Hound.Struct[] memory participants, uint256 terrain, uint256 theRandomness) public returns(bytes memory seed) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
        return output;
    }

    function generate(Queue.Struct memory queue) external payable returns(Race.Struct memory) {
        console.log("Generating race here ...");
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
        return abi.decode(output,(Race.Struct));
    }

}

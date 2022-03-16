// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';


contract Generator is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function generate(Race.Struct memory queue) external payable returns(Race.Struct memory) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
        return abi.decode(output,(Race.Struct));
    }

    function simulateClassicRace(uint256[] memory participants, uint256 terrain, uint256 theRandomness) public view returns(uint256[] memory, uint256[] memory) {
        return IGeneratorZerocost(control.zerocost).simulateClassicRace(participants, terrain, theRandomness);
    }

}

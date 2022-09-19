// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './params/Index.sol';


contract Generator is Params {

    constructor(GeneratorConstructor.Struct memory input) Params(input) {}

    function simulateClassicRace(
        uint256[] memory participants, 
        uint256 terrain, 
        uint256 theRandomness
    ) 
        public 
        view 
    returns(
        uint256[] memory, 
        uint256[] memory
    ) {
        return ISimulateClassicRace(control.zerocost).simulateClassicRace(participants, terrain, theRandomness);
    }

    function generate(Queue.Struct memory queue, uint256 queueId) external returns(Race.Struct memory) {
        (bool success, bytes memory output) = control.methods.delegatecall(msg.data);
        require(success);
        return abi.decode(output,(Race.Struct));
    }

}

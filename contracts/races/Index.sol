// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';
import './zerocost/Index.sol';


contract RacesData is Params {
    
    constructor(RacesConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(
        RacesConstructor.Struct memory input
    ) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function createQueues(Queue.Struct[] memory theQueues) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function deleteQueue(uint256 theId) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function uploadRace(Race.Struct memory race) external onlyOwner {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function enqueue(uint256 theId, uint256 hound) external payable {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

    function queue(uint256 theId) external view returns(Queue.Struct memory) {
        return RacesZeroCost(control.zerocost).queue(theId);
    }

}

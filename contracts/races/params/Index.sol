// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Race.sol';
import './Constructor.sol';
import '../../utils/Converters.sol';
import '../../generator/interfaces/IGenerate.sol';
import '../../queues/interfaces/IOnBeforeRace.sol';
import '../../utils/Withdrawable.sol';
import '../../queues/params/Queue.sol';


contract Params is Ownable, Withdrawable {
    
    event NewRace(uint256 indexed id, Race.Struct race);
    event NewFinishedRace(uint256 indexed id, Race.Struct race);
    event UploadRace(uint256 indexed id, Race.Struct race);

    uint256 public id = 1;
    RacesConstructor.Struct public control;
    mapping(uint256 => Race.Struct) public races;
    mapping(address => bool) public allowed;

    constructor(RacesConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(RacesConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        allowed[globalParameters.allowed] = true;
    }

    function race(uint256 theId) external view returns(Race.Struct memory) {
        return races[theId];
    }

    function participantsOf(uint256 theId) external view returns(uint256[] memory) {
        return races[theId].participants;
    }

    fallback() external payable {}
    receive() external payable {}

}

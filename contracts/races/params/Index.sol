// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Race.sol';
import './Constructor.sol';
import '../../payments/params/Payment.sol';
import '../../arenas/params/Arena.sol';
import '../../arenas/IIndex.sol';
import '../../utils/Converters.sol';
import '../../payments/IIndex.sol';
import '../../hounds/IIndex.sol';
import '../../generator/IIndex.sol';
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

}

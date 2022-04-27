// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Race.sol';
import './Constructor.sol';
import '../../payments/payment/Index.sol';
import '../../hounds/modifier/IIndex.sol';
import '../../arenas/arena/Index.sol';
import '../../arenas/zerocost/IIndex.sol';
import '../../utils/Converters.sol';
import '../../payments/methods/IIndex.sol';
import '../../hounds/hound/Index.sol';
import '../../hounds/zerocost/IIndex.sol';
import '../../utils/Withdrawable.sol';
import '../../queues/params/Queue.sol';


contract Params is Ownable, Withdrawable {
    
    event NewRace(uint256 indexed id, Race.Struct race);
    event NewFinishedRace(uint256 indexed id, Race.Struct race);
    event UploadRace(uint256 indexed id, Race.Struct race);

    uint256 public id = 1;
    RacesConstructor.Struct public control;
    mapping(uint256 => Race.Struct) public races;

    constructor(RacesConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(RacesConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

}

//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import '../../genetics/interfaces/IMixGenes.sol';
import '../../randomness/IGetRandomNumber.sol';
import '../interfaces/IBreedHounds.sol';
import '../../gamification/interfaces/IInitializeHoundGamingStats.sol';
import '../../races/interfaces/IGetStatistics.sol';
import '../../gamification/interfaces/IGetStamina.sol';
import '../../gamification/interfaces/IGetBreeding.sol';
import './HoundIdentity.sol';


contract Params is Ownable {

    IncubatorConstructor.Struct public control;
    mapping(address => bool) public allowed;
    mapping(uint256 => HoundIdentity.Struct) public houndsIdentity;

    constructor(IncubatorConstructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(IncubatorConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
    }

    function getIdentity(uint256 theId) external view returns(HoundIdentity.Struct memory) {
        return houndsIdentity[theId];
    }
}
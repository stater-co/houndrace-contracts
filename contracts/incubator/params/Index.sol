//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Constructor.sol';
import '../../genetics/interfaces/IMixGenes.sol';
import '../../randomness/IGetRandomNumber.sol';
import '../interfaces/IBreedHounds.sol';
import '../../gamification/interfaces/IInitializeHoundGamingStats.sol';
import '../../races/interfaces/IGetStatistics.sol';
import '../../gamification/interfaces/IGetStamina.sol';
import '../../gamification/interfaces/IGetBreeding.sol';
import '../../firewall/interfaces/IsAllowed.sol';
import './HoundIdentity.sol';


contract Params {

    IncubatorConstructor.Struct public control;
    mapping(address => bool) public allowed;
    mapping(uint256 => HoundIdentity.Struct) public houndsIdentity;

    constructor(IncubatorConstructor.Struct memory input) {
        control = input;
    }
    
    function setGlobalParameters(IncubatorConstructor.Struct memory globalParameters) external {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));
        control = globalParameters;
    }

    function getIdentity(uint256 theId) external view returns(HoundIdentity.Struct memory) {
        return houndsIdentity[theId];
    }

    function setIdentity(uint256 theId, HoundIdentity.Struct memory identity) external {
        require(allowed[msg.sender]);
        houndsIdentity[theId] = identity;
    }

}
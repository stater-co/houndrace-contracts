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
import 'hardhat/console.sol';


contract Params is Ownable {

    IncubatorConstructor.Struct public control;
    mapping(address => bool) public allowed;
    mapping(uint256 => HoundIdentity.Struct) public houndsIdentity;

    constructor(IncubatorConstructor.Struct memory input) {
        control = input;
        handleAllowedCallers(input.allowed);
    }
    
    function setGlobalParameters(IncubatorConstructor.Struct memory globalParameters) external onlyOwner {
        control = globalParameters;
        handleAllowedCallers(globalParameters.allowed);
    }

    function getIdentity(uint256 theId) external view returns(HoundIdentity.Struct memory) {
        return houndsIdentity[theId];
    }

    function setIdentity(uint256 theId, HoundIdentity.Struct memory identity) external {
        console.log("Set identity, from : ");
        console.log(msg.sender);
        console.log(allowed[msg.sender]);
        require(allowed[msg.sender]);
        houndsIdentity[theId] = identity;
    }

    function handleAllowedCallers(address[] memory allowedCallers) internal {
        for ( uint256 i = 0 ; i < allowedCallers.length ; ++i )
            allowed[allowedCallers[i]] = !allowed[allowedCallers[i]];
    }

}
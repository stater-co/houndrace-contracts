// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../hounds/params/Hound.sol';


interface IBreedHounds {

    function breedHounds(
        uint256 hound1Id, 
        HoundIdentity.Struct memory hound1, 
        uint256 hound2Id, 
        HoundIdentity.Struct memory hound2,
        uint256 onId
    ) external;

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../hounds/params/Hound.sol';


interface IBreedHounds {

    function breedHounds(
        uint256 hound1Id, 
        Hound.Struct memory hound1, 
        uint256 hound2Id, 
        Hound.Struct memory hound2,
        uint256 theId
    ) external view returns(Hound.Struct memory);

}
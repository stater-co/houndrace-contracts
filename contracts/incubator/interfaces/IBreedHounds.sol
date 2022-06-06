// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../../hounds/params/Hound.sol';


interface IBreedHounds {

    function breedHounds(bytes memory rawInput) external view returns(Hound.Struct memory);

}
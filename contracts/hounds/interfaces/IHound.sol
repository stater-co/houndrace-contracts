//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Hound.sol';


interface IHound {

    function hound(uint256 theId) external view returns(Hound.Struct memory);

}
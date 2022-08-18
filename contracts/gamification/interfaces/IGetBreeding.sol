//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/HoundBreeding.sol';


interface IGetBreeding {

    function getBreeding(uint256 id) external view returns(HoundBreeding.Struct memory);

}
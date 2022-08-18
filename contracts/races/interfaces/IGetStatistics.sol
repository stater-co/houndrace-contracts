// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/HoundStatistics.sol';


interface IGetStatistics {

    function getStatistics(uint256 theId) external view returns(HoundStatistics.Struct memory);

}
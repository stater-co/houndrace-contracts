// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Race.sol';


interface IUploadRace {

    function uploadRace(uint256 theId, Race.Struct memory race) external payable;

}

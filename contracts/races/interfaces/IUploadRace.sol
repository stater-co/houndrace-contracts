// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Race.sol';


interface IUploadRace {

    function uploadRace(Race.Struct memory race) external payable;

}

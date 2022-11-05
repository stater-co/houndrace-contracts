// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Race.sol';


interface IUploadRace {

    function uploadRace(
        uint256 raceId, 
        uint256 queueId,
        Race.Struct memory race
    ) external;

}

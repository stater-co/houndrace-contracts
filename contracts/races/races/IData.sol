// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import './Race.sol';


interface IRacesData {
    function createQueues(Race.Struct[] memory theQueues) external;
    function uploadRace(bytes memory race) external;
    function enqueue(uint256 theId, uint256 hound) external payable;
}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IParticipantsOf {

    function participantsOf(uint256 raceId) external view returns(uint256[] memory);

}

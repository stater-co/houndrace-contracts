// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


interface IParticipantsOf { 

    function participantsOf(uint256 queueId) external view returns(uint256[] memory);

}

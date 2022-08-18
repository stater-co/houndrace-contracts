// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;


interface IParticipantsOf {

    function participantsOf(uint256 theId) external view returns(uint256[] memory);

}

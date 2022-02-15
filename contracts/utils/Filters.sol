// SPDX-License-Identifier: MIT
pragma solidity <=0.8.11;


library Filters {

    function filterForWinners(uint256[] memory participants) internal pure returns(uint256[3] memory winners) {
        for ( uint256 i = 0 ; i < participants.length ; ++i ) {

            if (participants[i] > winners[0]) {
                winners[2] = winners[1];
                winners[1] = winners[0];
                winners[0] = i;
            } else if ( participants[i] > winners[1]) {
                winners[2] = winners[1];
                winners[1] = i;
            } else if (participants[i] > winners[2])
                winners[2] = i;

        }
    }

}

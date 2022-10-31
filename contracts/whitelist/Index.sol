// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/access/Ownable.sol';


contract Whitelist is Ownable {

    mapping(address => bytes4[]) public whitelists;

    constructor(address[] memory operators, bytes4[][] memory targets) {
        require(operators.length == targets.length);
        for (uint256 i = 0; i < operators.length ; ++i ) {
            for (uint256 j = 0; j < targets[i].length; ++j) {
                whitelists[operators[i]].push(targets[i][j]);
            }
        }
    }

    function updateWhitelist(address[] memory operators, bytes4[][] memory targets) internal {
        require(operators.length == targets.length);
        for (uint256 i = 0; i < operators.length ; ++i ) {
            for (uint256 j = 0; j < targets[i].length; ++j) {
                if ( j >= whitelists[operators[i]].length ) {
                    whitelists[operators[i]].push(targets[i][j]);
                } else {
                    whitelists[operators[i]][j] = targets[i][j];
                }
            }
        }
    }

    modifier whitelisted() {
        bool found = false;
        for (uint256 i = 0; i < whitelists[msg.sender].length; ++i) {
            if ( whitelists[msg.sender][i] == msg.sig ) {
                found = true;
            }
        }
        require(found);
        _;
    }

}

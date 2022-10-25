// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/access/Ownable.sol';


contract Whitelist is Ownable {

    mapping(address => bytes4) whitelists;

    constructor(address[] memory operators, bytes4[] memory targets) {
        require(operators.length == targets.length);
        for (uint256 i = 0; i < operators.length ; ++i ) {
            whitelists[operators[i]] = targets[i];
        }
    }

    function updateWhitelist(address[] memory operators, bytes4[] memory targets) internal {
        require(operators.length == targets.length);
        for (uint256 i = 0; i < operators.length ; ++i ) {
            whitelists[operators[i]] = targets[i];
        }
    }

    modifier whitelisted() {
        require(whitelists[msg.sender] == msg.sig);
        _;
    }

}

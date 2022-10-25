// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/access/Ownable.sol';
import 'hardhat/console.sol';


contract Whitelist is Ownable {

    mapping(address => bytes4) whitelists;

    constructor(address[] memory operators, bytes4[] memory targets) {
        require(operators.length == targets.length);
        for (uint256 i = 0; i < operators.length ; ++i ) {
            whitelists[operators[i]] = targets[i];
        }
    }

    function updateWhitelist(address[] memory operators, bytes4[] memory targets) external onlyOwner {
        require(operators.length == targets.length);
        for (uint256 i = 0; i < operators.length ; ++i ) {
            whitelists[operators[i]] = targets[i];
        }
    }

    function checkWhiteList(address user) external view returns(bytes4, bytes4) {
        return (whitelists[user],msg.sig);
    }

    modifier whitelisted() {
        require(whitelists[msg.sender] == msg.sig);
        _;
    }

}

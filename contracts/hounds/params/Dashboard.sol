//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';

contract Dashboard is Ownable {
    mapping(uint256 => string) public methods;
    function set(uint256 id, string memory value) external onlyOwner {
        methods[id] = value;
    }
}
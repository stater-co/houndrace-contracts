//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '@openzeppelin/contracts/access/Ownable.sol';

contract Deployed is Ownable {
    uint256 public ok;

    constructor(uint256 ok_) {
        ok = ok_;
    }

    function setOk(uint256 ok_) external {
        ok = ok_;
    }
}

contract Deployer {
    event ContractCreation(address newContract);

    constructor() {
        Deployed ok = new Deployed(8);
        emit ContractCreation(address(ok));
    }

}

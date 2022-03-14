//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import './params/Index.sol';

contract HoundracePotions is Params {

    constructor(string memory name, string memory symbol) ERC20(name,symbol) {}

    function burn(address account, uint256 amount) public {
        _burn(account, amount);
    }

}
//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import './params/Index.sol';

contract HoundracePotions is Params {

    constructor(OgarsConstructor.Struct memory input) Params(input) {}

    function burn(address account, uint256 amount) public {
        _burn(account, amount);
    }

}
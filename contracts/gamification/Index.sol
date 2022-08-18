//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import './params/Index.sol';


contract Gamification is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function setDefault(uint256 id) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function setStamina(uint256 id, HoundStamina.Struct memory stamina) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

    function setBreeding(uint256 id, HoundBreeding.Struct memory breeding) external {
        (bool success, ) = control.restricted.delegatecall(msg.data);
        require(success);
    }

}
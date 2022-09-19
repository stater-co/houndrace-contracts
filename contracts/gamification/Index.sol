//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './params/Index.sol';


contract Gamification is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function initializeHoundGamingStats(uint256 id, uint32[54] memory genetics) external {
        (bool success, ) = control.methods.delegatecall(msg.data);
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
//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract GamificationRestricted is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function setStamina(uint256 id, HoundStamina.Struct memory stamina) external {
        console.log("Setting stamina");
        console.log(allowed[msg.sender]);
        require(allowed[msg.sender]);
        houndsStamina[id] = stamina;
    }

    function setBreeding(uint256 id, HoundBreeding.Struct memory breeding) external {
        require(allowed[msg.sender]);
        houndsBreeding[id] = breeding;
    }

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import './params/Index.sol';

contract Incubator is Params {

    constructor(IncubatorConstructor.Struct memory input) Params(input) {}

    function breedHounds(
        uint256 hound1Id, 
        HoundIdentity.Struct memory hound1, 
        uint256 hound2Id, 
        HoundIdentity.Struct memory hound2, 
        uint256 onId
    ) public {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success);
    }

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../firewall/interfaces/IsAllowed.sol';
import './Constructor.sol';


contract Params {

    GeneticsConstructor.Struct public control;

    constructor(GeneticsConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(GeneticsConstructor.Struct memory globalParameters) external {
        require(IsAllowed(control.firewall).isAllowed(msg.sender,msg.sig));
        control = globalParameters;
    }

}

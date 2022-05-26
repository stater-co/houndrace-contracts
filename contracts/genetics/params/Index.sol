// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../IIndex.sol';
import './Constructor.sol';


contract Params is Ownable {

    GeneticsConstructor.Struct public control;

    constructor(GeneticsConstructor.Struct memory input) {
        control = input;
    }

    function setGlobalParameters(GeneticsConstructor.Struct memory globalParameters) external {
        control = globalParameters;
    }

    fallback() external payable {}
    receive() external payable {}

}

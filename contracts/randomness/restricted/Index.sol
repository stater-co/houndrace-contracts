// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract RandomnessRestricted is Params {

    function setGlobalParameters(RandomnessConstructor.Struct memory randomnessConstructor) external {
        control = randomnessConstructor;
    }

}


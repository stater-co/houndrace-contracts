// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract RandomnessRestrictedMethods is Params {

    function setGlobalParameters(address methods) external {
        methodsContract = methods;
    }

}


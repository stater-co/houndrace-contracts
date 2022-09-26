// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface IsAllowed {

    function isAllowed(
        address user, 
        bytes4 method
    ) external view returns(bool);

}
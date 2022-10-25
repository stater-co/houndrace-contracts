// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Boilerplate.sol';
import './Fees.sol';
import './Hound.sol';

library Constructor {
    struct Struct {
        string name;
        string symbol;
        Hound.Struct defaultHound;
        address[] operators;
        bytes4[] targets;
        ConstructorBoilerplate.Struct boilerplate;
        ConstructorFees.Struct fees;
    }
}

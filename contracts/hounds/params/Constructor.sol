// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Boilerplate.sol';
import './Fees.sol';

library Constructor {
    struct Struct {
        string name;
        string symbol;
        ConstructorBoilerplate.Struct boilerplate;
        ConstructorFees.Struct fees;
    }
}

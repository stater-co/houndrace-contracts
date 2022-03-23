// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;
import './Boilerplate.sol';
import './Fees.sol';

library Constructor {
    struct Struct {
        string name;
        string symbol;
        address[] allowedCallers;
        ConstructorBoilerplate.Struct boilerplate;
        ConstructorFees.Struct fees;
    }
}
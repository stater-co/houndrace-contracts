// SPDX-License-Identifier: MIT
pragma solidity <=0.8.12;
import './Boilerplate.sol';
import './Fees.sol';

library GlobalVariables {
    struct Struct {
        string name;
        string symbol;
        address[] allowedCallers;
        ConstructorBoilerplate.Struct boilerplate;
        ConstructorFees.Struct fees;
        bool[] isAllowed;
    }
}
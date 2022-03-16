//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import './Constructor.sol';


contract Params is ERC20 {

    constructor(OgarsConstructor.Struct memory input) ERC20(input.name,input.symbol) {}

}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface ITransferFrom {

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
    
}

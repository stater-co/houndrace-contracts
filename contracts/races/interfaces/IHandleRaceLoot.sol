// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../../payments/params/Payment.sol';


interface IHandleRaceLoot {

    function handleRaceLoot(
        Payment.Struct memory payment
    ) external payable;

}
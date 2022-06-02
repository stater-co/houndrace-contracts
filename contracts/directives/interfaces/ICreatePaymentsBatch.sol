// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Payment.sol';


interface ICreatePaymentsBatch { 

    function createPaymentsBatch(Payment.Struct[] memory batch) external;

}
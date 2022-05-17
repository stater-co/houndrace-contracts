// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Payment.sol';


interface ICreatePaymentsBatch { 

    function createPaymentsBatch(Payment.Struct[] memory batch) external;

}

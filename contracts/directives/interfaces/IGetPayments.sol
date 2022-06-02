// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;
import '../params/Payment.sol';


interface IGetPayments { 

    function getPayments(uint256 id) external view returns(Payment.Struct[] memory);

}
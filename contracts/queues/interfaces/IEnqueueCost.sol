// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../payments/params/MicroPayment.sol';

interface IEnqueueCost {

    function enqueueCost(uint256 theId) external view returns(
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory, 
        MicroPayment.Struct memory
    );

}

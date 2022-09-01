// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import './Payment.sol';


library Reservoir {
    
    struct Struct {
        uint256[] ids;
        uint256[] amounts;
        Payment.PaymentTypes paymentType;
    }

}

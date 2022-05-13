// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;
import './Payment.sol';
import './Reward.sol';


library Directive {
    
    struct Struct {

        Payment.Struct[] payments;

        Reward.Struct[] rewards;

    }

}
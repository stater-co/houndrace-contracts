//SPDX-License-Identifier: MIT
pragma solidity <=0.8.10;

import './Statistics.sol';
import './Stamina.sol';
import './Breeding.sol';
import './Identity.sol';


library Hound {
    
    struct Struct {
        Statistics.Struct statistics;
        Stamina.Struct stamina;
        Breeding.Struct breeding;
        Identity.Struct identity;
        string title;
        string token_url;
        bool custom;
        bool running;
    }
    
}
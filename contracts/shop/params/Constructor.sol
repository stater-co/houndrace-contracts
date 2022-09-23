// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../firewall/params/Constructor.sol';


library ShopConstructor {
    
    struct Struct {
        FirewallConstructor.Struct firewall;
        address methods;
        address restricted;
        address alphadune;
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../firewall/params/Constructor.sol';


library PaymentsConstructor {
    
    struct Struct {
        FirewallConstructor.Struct firewall;
        address alphadune;
        address restricted;
        address methods;
    }

}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library Arena {
    
    struct Struct {
        string name;
        string token_uri;

        address platformAndArenaFeeCurrency;
        uint256 platformAndArenaFee;
        
        uint32 surface;
        uint32 distance;
        uint32 weather;
    }
    
}

// SPDX-License-Identifier: MIT
pragma solidity <=0.8.10;


library Arena {
    
    struct Struct {
        uint32 surface;
        uint32 distance;
        uint32 weather;
    }

    struct Wrapped {
        uint256 id;
        Struct arena;
    }

}

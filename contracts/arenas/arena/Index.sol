// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;


library Arena {
    
    struct Struct {
        address owner;
        uint256 fee;
        uint32 surface;
        uint32 distance;
        uint32 weather;
    }

    struct Wrapped {
        uint256 id;
        Struct arena;
    }

}

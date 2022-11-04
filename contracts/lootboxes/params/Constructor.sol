// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library LootboxesConstructor {
    struct Struct {
        string name;
        address[] operators;
        bytes4[][] targets;
        bool canBeOpened;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


library LootboxesConstructor {
    struct Struct {
        string name;
        address[] allowedApprovals;
        address hounds;
        address payments;
        address alphadune;
        bool canBeOpened;
    }
}

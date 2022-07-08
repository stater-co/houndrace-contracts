// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;


library Constructor {
    struct Struct {
        string name;
        string symbol;
        string lootBoxURI;
        string secondLootBoxURI;
        address mintCostCurrency;
        address hounds;
        uint256 mintCost;
        bool canBeOpened;
    }
}

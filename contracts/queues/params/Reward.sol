// SPDX-License-Identifier: MIT
pragma solidity <=0.8.13;


library Reward {
    
    struct Struct {

        // Max and Min amount to be given, otherwise set on 0
        uint256 maxAmount;
        uint256 minAmount;

        // Valability time interval if it's the case, otherwise set on 0 both
        uint256 dateStart;
        uint256 dateStop;


        // 1 - breed hound fee
        // 2 - refill stamina fee
        // 3 - refill breed cooldown fee
        uint32 provenience;

        // 1 - ETH
        // 2 - ERC20
        // 3 - ERC721
        // 4 - ERC1155
        uint32 rewardType;

        // Set on true if winners can get this custom reward too
        bool forWinners;
    }

}

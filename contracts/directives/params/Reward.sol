// SPDX-License-Identifier: MIT
pragma solidity <=0.8.15;
import './Payment.sol';

library Reward {
    
    struct Struct {

        Payment.Struct payment;

        // Max and Min amount to be given, otherwise set on 0
        uint256 maxAmount;
        uint256 minAmount;

        // Valability time interval if it's the case, otherwise set on 0 both
        uint256 dateStart;
        uint256 dateStop;

        // 1 - ETH
        // 2 - ERC20
        // 3 - ERC721
        // 4 - ERC1155
        uint32 rewardType;

        // Set on true if winners can get this custom reward too
        bool forWinners;
    }

}

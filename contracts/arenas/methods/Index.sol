// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../params/Index.sol';


contract ArenasMethods is Params {

    constructor(ArenasConstructor.Struct memory input) Params(input) {}

    function handleArenaUsage(uint256 arenaId) external whitelisted {
        
        uint256[] memory amounts = new uint256[](1);
        
        amounts[0] = ( arenas[arenaId].fee / 100 ) * control.alphadunePercentage;
        IPay(control.payments).pay(
            control.payments,
            control.alphadune,
            arenas[arenaId].currency,
            new uint256[](0),
            amounts,
            arenas[arenaId].currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        amounts[0] = arenas[arenaId].fee - amounts[0];
        IPay(control.payments).pay(
            control.payments,
            ownerOf(arenaId),
            arenas[arenaId].currency,
            new uint256[](0),
            amounts,
            arenas[arenaId].currency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );
        
    }

}
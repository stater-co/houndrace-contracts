// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '../params/Index.sol';


contract ArenasMethods is Params {

    constructor(ArenasConstructor.Struct memory input) Params(input) {}

    function handleArenaUsage(uint256 theId) external {
        require(allowed[msg.sender]);
        
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = arenas[theId].fee * ( 100 / ( 100 - control.alhpadunePercentage ) );
        
        IPay(control.payments).pay(
                control.payments,
                ownerOf(theId),
                arenas[theId].currency,
                new uint256[](0),
                amounts,
                arenas[theId].currency == address(0) ? 3 : 2
        );

        amounts[0] = arenas[theId].fee * ( 100 / control.alhpadunePercentage );

        IPay(control.payments).pay(
                control.payments,
                control.alphadune,
                arenas[theId].currency,
                new uint256[](0),
                amounts,
                arenas[theId].currency == address(0) ? 3 : 2
        );

    }

}
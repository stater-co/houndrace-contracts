// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract ArenasMethods is Params {

    constructor(ArenasConstructor.Struct memory input) Params(input) {}

    function handleArenaUsage(uint256 theId) external payable {
        require(allowed[msg.sender]);
        
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = arenas[theId].fee;
        
        IPay(control.payments).pay{
            value: arenas[theId].feeCurrency == address(0) ? msg.value : 0
        }(
                msg.sender,
                ownerOf(theId),
                arenas[theId].feeCurrency,
                new uint256[](0),
                amounts,
                arenas[theId].feeCurrency == address(0) ? 3 : 2
        );

    }

}
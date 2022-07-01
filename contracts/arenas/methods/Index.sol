// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '../params/Index.sol';


contract ArenasMethods is Params {

    constructor(ArenasConstructor.Struct memory input) Params(input) {}

    function handleArenaUsage(uint256 theId) external payable {
        console.log("================= 1");
        require(allowed[msg.sender]);

        console.log("================= 2");
        
        ITransferTokens(control.payments).transferTokens{
            value: arenas[theId].feeCurrency == address(0) ? msg.value : 0
        }(
            arenas[theId].feeCurrency,
            msg.sender,
            ownerOf(theId),
            arenas[theId].fee
        );

    }

}
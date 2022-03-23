// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';


contract RacesZeroCost is Params {

    constructor(RacesConstructor.Struct memory input) Params(input) {}

    function queue(uint256 theId) external view returns(Queue.Struct memory) {
        return queues[theId];
    }

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';


contract RacesZeroCost is Params {

    function queue(uint256 theId) external view returns(Queue.Struct memory) {
        return queues[theId];
    }

}

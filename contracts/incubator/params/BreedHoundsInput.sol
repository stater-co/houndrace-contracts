// SPDX-License-Identifier: MIT
pragma solidity <=0.8.14;
import '../../hounds/params/Hound.sol';

library BreedHoundsInput {
    
    struct Struct {
        uint256 hound1Id;
        Hound.Struct hound1;
        uint256 hound2Id;
        Hound.Struct hound2;
    }

}

//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import '../params/Index.sol';

contract HoundsZerocost is Params {

    constructor(Constructor.Struct memory input) Params(input) {}

    function hound(uint256 theId) external view returns(Hound.Struct memory) {
        return hounds[theId];
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return hounds[_tokenId].token_url;
    }

    function getBreedCost(uint256 hound1, uint256 hound2) external view returns(uint256) {
        require(ownerOf(hound1) == msg.sender);
        return control.fees.breedCost + control.fees.breedFee + ( ownerOf(hound2) == msg.sender ? 0 : hounds[hound2].breeding.breedingFee );
    }

}
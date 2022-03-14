//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../params/Index.sol';

contract HoundsZerocost is Params {

    constructor() ERC721("","") {}

    function hound(uint256 theId) external view returns(Hound.Struct memory) {
        return hounds[theId];
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return hounds[_tokenId].token_url;
    }

}
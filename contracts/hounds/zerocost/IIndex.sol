//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../hound/Index.sol';


interface IHoundsZerocost {

    function hound(uint256 theId) external view returns(Hound.Struct memory);

    function tokenURI(uint256 _tokenId) external view returns(string memory);

}
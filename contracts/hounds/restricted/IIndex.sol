//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '../hound/Index.sol';


interface IHoundsRestricted {

    function initializeHound(uint256 onId, Hound.Struct memory theHound) external;

    function setTokenURI(uint256 _tokenId, string memory token_url) external;

}
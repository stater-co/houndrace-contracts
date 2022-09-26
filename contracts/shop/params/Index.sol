//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import './Discount.sol';
import './Constructor.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/interfaces/IERC1155.sol';
import '../../firewall/interfaces/IsAllowed.sol';
interface Geyser { function totalStakedFor(address addr) external view returns(uint256); }


contract Params {
    
    uint256 public id = 1;
    ShopConstructor.Struct public control;
    mapping(uint256 => Discount.Struct) discounts;
    event NewDiscount(uint256 indexed id, Discount.Struct discount);

    constructor(
        ShopConstructor.Struct memory input
    ) {
        control = input;
    }

    function setGlobalParameters(
        ShopConstructor.Struct memory globalParameters
    ) 
        external 
    {
        control = globalParameters;
    }

}

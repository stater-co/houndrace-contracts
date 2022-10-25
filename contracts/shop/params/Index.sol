//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import '../../whitelist/Index.sol';
import './Discount.sol';
import './Constructor.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/interfaces/IERC1155.sol';
interface Geyser { function totalStakedFor(address addr) external view returns(uint256); }


contract Params is Whitelist {
    
    uint256 public id = 1;
    ShopConstructor.Struct public control;
    mapping(address => bool) allowed;
    mapping(uint256 => Discount.Struct) discounts;
    event NewDiscount(uint256 indexed id, Discount.Struct discount);

    constructor(
        ShopConstructor.Struct memory input
    ) 
        Whitelist(input.operators, input.targets) 
    {
        control = input;
    }

    function setGlobalParameters(
        ShopConstructor.Struct memory globalParameters
    ) 
        external 
        onlyOwner 
    {
        control = globalParameters;
        updateWhitelist(globalParameters.operators, globalParameters.targets);
    }

}

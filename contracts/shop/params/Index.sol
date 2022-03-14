//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import '../discount/Index.sol';
import './Constructor.sol';
import '../zerocost/IIndex.sol';
interface Geyser { function totalStakedFor(address addr) external view returns(uint256); }


contract Params is Ownable {
    
    uint256 public id = 1;
    ShopConstructor.Struct public control;
    mapping(address => bool) allowed;
    mapping(uint256 => Discount.Struct) discounts;
    event NewDiscount(uint256 indexed id, Discount.Struct discount);

}

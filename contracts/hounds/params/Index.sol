//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import './Constructor.sol';
import './GlobalVariables.sol';
import '../hound/Index.sol';
import '../../payments/methods/IIndex.sol';
import '../modifier/IIndex.sol';
import '../../incubator/methods/IIndex.sol';
import '../../shop/methods/IIndex.sol';


abstract contract Params is Ownable, ERC721, ERC721Holder {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    event NewHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event BreedHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event HoundBreedable(uint256 indexed id, uint256 price);
    event HoundStaminaUpdate(uint256 indexed id, uint32 stamina);
    event HoundBreedingStatusUpdate(uint256 indexed id, bool status);
    Constructor.Struct public control;

}
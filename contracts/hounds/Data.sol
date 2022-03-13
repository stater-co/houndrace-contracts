//SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '../incubator/IData.sol';
import './Constructor.sol';
import './GlobalVariables.sol';
import './hound/Index.sol';
import '../payments/Payment.sol';
interface ShopDataInterface { function calculateDiscount(address requester) external returns(uint256); }

contract HoundsData is Ownable, ERC721, ERC721Holder {
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) public hounds;
    string error = "Failed to delegatecall";
    event NewHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event BreedHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event HoundBreedable(uint256 indexed id, uint256 price);
    event HoundStaminaUpdate(uint256 indexed id, uint32 stamina);
    event HoundBreedingStatusUpdate(uint256 indexed id, bool status);
    Constructor.Struct public control;

    constructor(
        Constructor.Struct memory input
    ) ERC721(input.name,input.symbol) {
        control = input;
    }

    function breedHounds(uint256 hound1, uint256 hound2) external payable {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function updateHoundStamina(uint256 theId) public payable {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function updateHoundBreeding(uint256 theId, uint256 breedingCooldownToConsume) public payable {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function putHoundForBreed(uint256 theId, uint256 fee, bool status) external {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }

    function hound(uint256 theId) external view returns(Hound.Struct memory) {
        return hounds[theId];
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return hounds[_tokenId].token_url;
    }

}
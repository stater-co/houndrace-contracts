//SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

import '../incubator/IData.sol';

import './Constructor.sol';
import './GlobalVariables.sol';
import './Hound.sol';

interface ShopDataInterface { function calculateDiscount(address requester) external returns(uint256); }

/**
 * DIIMIIM: To be run with enable optimisation on 10 cycles
 */
contract HoundsData is Ownable, ERC721, ERC721Holder {
    
    uint256 public id = 1;
    mapping(address => bool) public allowed;
    mapping(uint256 => Hound.Struct) hounds;
    string error = "Failed to delegatecall";
    event NewHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event BreedHound(uint256 indexed id, address indexed owner, Hound.Struct hound);
    event HoundBreedable(uint256 indexed id, uint256 price);
    event HoundNameChanded(uint256 indexed id, string name);
    event HoundStaminaUpdate(uint256 indexed id, uint32 stamina);
    event HoundBreedingStatusUpdate(uint256 indexed id, bool status);
    Constructor.Struct public control;

    constructor(
        Constructor.Struct memory input
    ) ERC721(input.name,input.symbol) {
        control = input;
    }

    function setGlobalParameters(
        GlobalVariables.Struct memory input
    ) external onlyOwner {
        (bool success, ) = input.methods.delegatecall(msg.data);
        require(success,error);
    }
    
    function adminCreateHound(Hound.Struct memory theHound) external onlyOwner {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
    }
    
    function updateHound(uint256 theId, string memory houndName) external {
        (bool success, ) = control.methods.delegatecall(msg.data);
        require(success,error);
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
    
    function setTokenURI(uint256 _tokenId, string memory token_url) external onlyOwner {
        hounds[_tokenId].token_url = token_url;
    }

}
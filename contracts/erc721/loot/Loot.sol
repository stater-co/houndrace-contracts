// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import '../../randomness/IGetRandomNumber.sol';


contract Loot is Ownable, ERC721URIStorage {

    uint256 public id;
    Constructor.Struct public control;
    mapping(uint256 => uint256) public lootBoxes;

    event NewLootBox(uint256 indexed id);

    constructor(
        Constructor.Struct memory input
    ) ERC721(input.name, input.symbol) {}

    function loot() external payable {
        
        // Payment
        require(control.mintCostCurrency == address(0) ? msg.value >= control.mintCost : IERC20(control.mintCostCurrency).transferFrom(msg.sender, address(this), control.mintCost));

        require(IERC721(control.hounds).balanceOf(address(this)) >= 2); // 2 lootboxes per mint

        _mint(msg.sender, id);
        _setTokenURI(id, control.lootBoxURI);

        lootBoxes[id] = 2;
        emit NewLootBox(id);
        ++id;
        
    }

    function open() external {
        require(control.canBeOpened);
    }

}

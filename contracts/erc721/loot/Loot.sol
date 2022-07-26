// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import './Box.sol';
import '../../randomness/IGetRandomNumber.sol';


contract Loot is Ownable, ERC721URIStorage {

    uint256 public id;
    Constructor.Struct public control;
    mapping(uint256 => Box.Struct) public lootboxes;

    event NewLootBox(uint256 indexed id);

    constructor(
        Constructor.Struct memory input
    ) ERC721(input.name, input.symbol) {}

    function mint(Box.Struct[] memory boxes) external onlyOwner {
        for ( uint256 i = 0; i < boxes.length; ++i ) {
            _mint(boxes[i]);
        }
    }

    function _mint(Box.Struct memory box) internal {
        for ( uint256 i = 0; i < box.hounds.length; ++i ) {
            IERC721(control.hounds).safeTransferFrom(msg.sender,address(this),box.hounds[i]);
        }

        _mint(msg.sender, id);
        _setTokenURI(id, control.lootBoxURI);

        emit NewLootBox(id);
        ++id;
    }

    function open(uint256 boxId) external payable {
        require(control.canBeOpened && lootboxes[boxId].hounds.length > 0);
        
        // Payment
        require(lootboxes[boxId].currency == address(0) ? msg.value >= lootboxes[boxId].cost : IERC20(lootboxes[boxId].currency).transferFrom(msg.sender, address(this), lootboxes[boxId].cost));

        IERC721(control.hounds).safeTransferFrom(address(this),msg.sender,lootboxes[boxId].hounds[lootboxes[boxId].hounds.length-1]);
        
        uint[] memory newHounds = new uint[](lootboxes[boxId].hounds.length - 1);
        lootboxes[boxId].hounds = newHounds;

        _setTokenURI(id, control.secondLootBoxURI);
    }

}

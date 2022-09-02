// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import './Constructor.sol';
import './Box.sol';
import '../../payments/interfaces/IPay.sol';


contract Lootboxes is Ownable, ERC721URIStorage, ERC721Holder {

    uint256 public id;
    Constructor.Struct public control;
    mapping(uint256 => Box.Struct) private lootboxes;

    event NewLootBox(uint256 indexed id);
    event LootboxOpened(uint256 indexed id, Box.Struct box, address indexed owner);

    constructor(
        Constructor.Struct memory input
    ) ERC721("HoundRace Lootbox", "HRLB") {
        control = input;
    }

    function mint(address priceCurrency, uint256 price, uint256 amount) external onlyOwner {
        for ( uint256 i = 0; i < amount; ++i ) {
            _mint(msg.sender, id);
            _setTokenURI(id, control.token_uri);
            lootboxes[id].priceCurrency = priceCurrency;
            lootboxes[id].price = price;
        }

        emit NewLootBox(id);
        ++id;
    }

    function setOpenStatus(bool status) external onlyOwner {
        control.canBeOpened = status;
    }

    function open(uint256 boxId) external payable {
        require(control.canBeOpened);
        require(ownerOf(boxId) == msg.sender);
        
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = lootboxes[boxId].price;

        IPay(control.payments).pay{
            value: lootboxes[boxId].priceCurrency == address(0) ? lootboxes[boxId].price : 0
        }(
            control.payments,
            control.alphadune,
            lootboxes[boxId].priceCurrency,
            new uint256[](0),
            amounts,
            lootboxes[boxId].priceCurrency == address(0) ? Payment.PaymentTypes.DEFAULT : Payment.PaymentTypes.ERC20
        );

        emit LootboxOpened(boxId, lootboxes[boxId], msg.sender);

        _burn(boxId);
    }

}

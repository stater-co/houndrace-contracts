// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
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

    constructor(
        Constructor.Struct memory input
    ) ERC721("HoundRace Lootboxes", "HRLB") {
        control = input;
    }

    function mint(Box.Struct[] memory boxes) external onlyOwner {
        for ( uint256 i = 0; i < boxes.length; ++i ) {
            IERC721(control.hounds).safeTransferFrom(msg.sender,address(this),boxes[i].hound);

            _mint(msg.sender, id);
            _setTokenURI(id, control.token_uri);

            lootboxes[id] = boxes[i];

            emit NewLootBox(id);
            ++id;
        }
    }

    function open(uint256 boxId) external payable {
        require(control.canBeOpened);
        
        uint256[] memory amounts = new uint256[](1);
        amounts[0] = lootboxes[boxId].purchasePrice;

        IPay(control.payments).pay{
            value: lootboxes[boxId].currency == address(0) ? lootboxes[boxId].purchasePrice : 0
        }(
                control.payments,
                control.alphadune,
                lootboxes[boxId].currency,
                new uint256[](0),
                amounts,
                lootboxes[boxId].currency == address(0) ? 3 : 2
        );

        IERC721(control.hounds).transferFrom(address(this),msg.sender,lootboxes[boxId].hound);

        _burn(boxId);
    }

}
